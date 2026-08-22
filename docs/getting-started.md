# Creating a Sandustry mod

This guide covers the smallest useful Sandkit API v1 mod and the conventions
that prevent the most common packaging and runtime mistakes.

## Minimal layout

```text
mods/
  example-mod/
    modinfo.json
    main.js
    worker.js          # optional
    patches.json       # optional
    config/            # optional configuration overrides
    assets/            # optional sprites and texture overrides
    map/               # optional custom-map data
    preview.png        # Workshop preview
    workshop.json      # Workshop identity, created during publishing
```

`modinfo.json` is strict JSON: comments and trailing commas are invalid.

```json
{
  "manifestVersion": 1,
  "id": "author.example-mod",
  "name": "Example Mod",
  "version": "1.0.0",
  "apiVersion": 1,
  "entry": "main.js",
  "description": "An example Sandustry mod.",
  "author": "Author",
  "dependencies": [],
  "loadOrder": 0
}
```

Add `"workerEntry": "worker.js"` only when the mod actually needs worker code.
Keep the mod ID stable after publishing; it is the identity Sandkit uses for
the mod.

## Main entry

The main entry owns registration, UI, sprite loading, events, configuration,
and idle-safe changes to the simulation. Sandkit exposes the API on
`sandkit.api`.

```js
await (async () => {
  "use strict";

  const api = sandkit.api;

  await api.sprites.loadFromMod(
    "example-structure",
    "assets/example-structure.png"
  );

  api.ui.toast("Example Mod loaded");
})();
```

Resolve IDs and load assets once during startup. Prefer an event, hook,
processor interval, or next-tick callback over polling every frame.

## Read a cell without guessing

Method names ending in `AtCell` use integer cell coordinates. Methods ending in
`AtWorld` use world-space coordinates unless their signature says otherwise.

```js
const api = sandkit.api;
const { x: cellX, y: cellY } = api.input.getMouseCellPosition();
const info = api.elements.getInfoAtCell(cellX, cellY);

if (info !== null) {
  const definition = api.elements.getDefinitionByType(info.elementType);

  console.log({
    elementId: definition?.id,
    matterType: definition?.matterType,
    isParticle: info.isParticle,
    velocity: api.elements.getVelocityAtCell(cellX, cellY)
  });
}
```

Nullable queries return `null` for an empty or inapplicable cell. A data-field
value of `0` is real data, so do not use a truthiness check where the declared
return type distinguishes `0` from `null`.

Resolve stable string IDs rather than copying numeric values observed at
runtime:

```js
const sandType = api.elements.getTypeFromId("sand");
```

## Change a cell from main code

Main code should use the idle-safe methods ending in `WhenIdle`:

```js
const sandType = api.elements.getTypeFromId("sand");

if (api.world.isCellEmptyAtCell(cellX, cellY)) {
  api.elements.createAtCellWhenIdle(cellX, cellY, sandType);
}
```

For related work that must happen together, schedule a callback with
{@link main.world.runWhenSimulationIdle}. Do not substitute a worker-only direct
mutation method in `main.js`.

## Before testing

- Confirm that every entry, asset, configuration, map, and patch path exists.
- Parse JSON files strictly.
- Check every nullable API result before reading from it.
- Verify that each API call exists in the correct main or worker reference.
- Test the important gameplay path in a clean game session.
