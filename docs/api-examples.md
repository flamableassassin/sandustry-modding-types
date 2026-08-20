# Practical Sandkit API examples

These examples show how the API signatures fit together in a mod. They favor
stable string IDs, nullable-result checks, and the correct mutation method for
each runtime. Replace example IDs with IDs registered by your mod or provided
by the game.

## Main entry startup

Resolve stable values and load assets once when `main.js` starts.

```js
await (async () => {
  "use strict";

  const api = sandkit.api;
  const MOD_ID = "author.example-mod";
  const STRUCTURE_ID = "example-structure";

  await api.sprites.loadFromMod(
    STRUCTURE_ID,
    "assets/example-structure.png",
  );

  api.storage.ensure(MOD_ID);
  api.ui.toast(`${MOD_ID} loaded`);
})();
```

Loading and resolving once is especially important for callbacks that run
frequently.

## Inspect the cell under the mouse

Element queries are nullable. Check the result before using its fields, then
resolve the numeric runtime type to its definition.

```js
const api = sandkit.api;
const { x: cellX, y: cellY } = api.input.getMouseCellPosition();
const info = api.elements.getInfoAtCell(cellX, cellY);

if (info !== null) {
  const definition = api.elements.getDefinitionByType(info.elementType);
  const velocity = api.elements.getVelocityAtCell(cellX, cellY);

  console.log({
    id: definition?.id,
    matterType: definition?.matterType,
    isParticle: info.isParticle,
    cellId: info.cellId,
    velocity,
  });
}
```

Do not hard-code an `elementType` or `cellId` copied from this output. Numeric
values are runtime identifiers; resolve stable content IDs through the API.

## Create an element safely from main code

Main-entry simulation changes use idle-safe methods ending in `WhenIdle`.

```js
const api = sandkit.api;
const sandType = api.elements.getTypeFromId("sand");

function placeSandIfEmpty(cellX, cellY) {
  if (!api.world.isCellEmptyAtCell(cellX, cellY)) return;
  api.elements.createAtCellWhenIdle(cellX, cellY, sandType);
}
```

For a group of related operations, schedule the work together:

```js
api.world.runWhenSimulationIdle(() => {
  // Perform the documented simulation-safe work here.
});
```

## Sequence queued changes across ticks

When a cell may contain either terrain or an element, queue both removals and
create the replacement on the following tick.

```js
const api = sandkit.api;

function replaceCellWithElement(cellX, cellY, elementType) {
  api.elements.removeAtCellWhenIdle(cellX, cellY);
  api.terrains.removeAtCellWhenIdle(cellX, cellY);

  api.schedule.nextTick(() => {
    api.elements.createAtCellWhenIdle(cellX, cellY, elementType);
  });
}
```

This is useful when the original cell can change state while an idle mutation
is waiting to run.

## Scan a bounded area

Use the grid helpers instead of writing coordinate loops repeatedly.

```js
const api = sandkit.api;
const targetType = api.elements.getTypeFromId("sunsand");
const matches = [];

api.grid.forEachCellInCircle(centerCellX, centerCellY, radius, (x, y) => {
  if (api.elements.isTypeAtCell(x, y, targetType)) {
    matches.push({ x, y });
  }
});
```

Keep the radius bounded when this runs in a recurring callback.

## Convert a world position to a cell

Projectile and effect positions use world coordinates. Grid operations use cell
coordinates.

```js
const api = sandkit.api;
const { cellSize } = api.rendering.getGridMetrics();

const cellX = Math.floor(projectile.x / cellSize);
const cellY = Math.floor(projectile.y / cellSize);
```

Conversely, `api.rendering.getDrawPositionAtCell(cellX, cellY)` returns a draw
position for a cell.

## React to a placed structure

Event subscriptions return an unsubscribe function. Event payload types are
still being documented, so guard the values you use.

```js
const api = sandkit.api;
const MOD_ID = "author.example-mod";

const unsubscribe = api.events.on("building:placed", (payload) => {
  const structure = payload?.structure;
  if (!api.structures.isType(structure, "example-structure")) return;

  api.structures.setData(structure, { initialized: true });
  api.storage.set(MOD_ID, "lastPlaced", {
    x: structure.x,
    y: structure.y,
  });
});

// Call unsubscribe() if the handler is no longer needed.
```

Treat the returned `Structure` as engine-owned. Update it through documented
structure methods rather than reconstructing a reference from guessed fields.

## Store mod state

Use a stable mod ID to keep one mod's data separate from another's.

```js
const api = sandkit.api;
const MOD_ID = "author.example-mod";

api.storage.ensure(MOD_ID);

const previous = api.storage.get(MOD_ID, "settings") ?? {};
api.storage.set(MOD_ID, "settings", {
  ...previous,
  enabled: true,
});
```

The `storage.local` namespace is also available for local keys when a mod-scoped
store is not required.

## Ask for confirmation

Main-entry UI methods that display a modal return promises.

```js
const shouldContinue = await api.ui.confirm(
  "Replace the selected cell?",
  "Example Mod",
);

if (shouldContinue) {
  placeSandIfEmpty(cellX, cellY);
}
```

## Worker entry mutation

Worker code has direct mutation methods without the `WhenIdle` suffix. Use them
only inside the appropriate worker lifecycle or hook; do not copy this pattern
into `main.js`.

```js
const api = sandkit.api;
const sandType = api.elements.getTypeFromId("sand");

function createSandFromWorker(cellX, cellY) {
  if (api.world.isCellEmptyAtCell(cellX, cellY)) {
    api.elements.createAtCell(cellX, cellY, sandType);
  }
}
```

Use `api.worker.getIndex()` and `api.worker.getCount()` when work needs to be
partitioned across workers. Shared reads do not imply that every method in the
same namespace is available in both runtimes; check the main and worker entry
references separately.

## Common mistakes

- Calling a worker-only mutation from `main.js`.
- Using world coordinates with an `AtCell` method.
- Treating `0`, `null`, and `undefined` as interchangeable.
- Hard-coding numeric runtime IDs instead of resolving string IDs.
- Polling every frame when an event, hook, processor, or next-tick callback fits.
- Assuming an unresolved `unknown` type has a particular shape.
