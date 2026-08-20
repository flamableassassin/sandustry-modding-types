# Main and worker runtimes

Sandkit exposes related but different APIs to a mod's main and worker entries.
Treating them as one API can produce code that looks valid but fails in the
runtime where it is loaded.

## Main entry (`main.js`)

Main code handles content registration and game-facing behavior, including UI,
sprites, settings, events, structures, and other startup work. Simulation
changes from this context should use:

- methods whose names end in `WhenIdle`;
- `api.world.runWhenSimulationIdle()`; or
- a documented atomic structure-processor commit.

Use startup for one-time registration and cache stable type resolutions instead
of resolving the same IDs repeatedly in a hot callback.

## Worker entry (`worker.js`)

Worker code runs in manager/simulation worker contexts. It exposes a smaller
API and includes direct element mutation operations intended for the relevant
worker lifecycle or hook.

Do not copy a main-thread call into worker code unless it appears in the worker
entry reference. Likewise, do not use a direct worker mutation in main code just
because the namespace has a similar name.


## Coordinates and identifiers

- `AtCell` methods use cell coordinates.
- `AtWorld` methods use world coordinates unless their signature says otherwise.
- Element, terrain, and structure queries are independent. Finding an element
  does not imply that terrain or structure queries for that cell are non-null.
- Numeric element, terrain, structure, action, matter, and scene values are
  runtime identifiers. Resolve stable string IDs through the API when possible.
- Use `getResolvedTypeAtCell()` when particle cells should behave like their
  linked underlying element.

## Structure processors

Use `api.structures.addProcessor()` for recurring machine behavior. Keep a
processor bounded:

- cache stable type resolutions outside the callback;
- choose an appropriate `intervalMs`;
- return immediately when there is no input or possible output;
- validate destinations before committing mutations;
- use the documented atomic commit mechanism for coordinated operations; and
- cache topology instead of traversing an unchanged network every interval.

A returned `Structure` is engine-owned. Pass it to documented structure methods
instead of reconstructing a reference from guessed fields.

## Reliability checklist

1. Check the declaration for the correct entry point.
2. Do not invent an option, event payload, enum member, or return shape.
3. Handle `null` and `undefined` exactly as declared.
4. Schedule main-thread simulation changes safely.
5. Treat `unknown` as an unresolved documentation gap, not permission to assume
   a shape.
