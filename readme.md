# Sandustry modding types

Community-maintained TypeScript declarations and API reference for Sandustry's
Sandkit modding API.

- [Browse the generated API reference](https://flamableassassin.github.io/sandustry-modding-types/)
- [Learn from practical API examples](./docs/api-examples.md)
- [Create a basic mod](./docs/getting-started.md)
- [Understand the main and worker runtimes](./docs/runtime-model.md)
- [Package assets, maps, patches, and Workshop metadata](./docs/mod-packaging.md)

## What this repository provides

Source folders mirror the live `sandkit` object in the game:

| Path | Live object |
| --- | --- |
| `src/sandkit/api` | `sandkit.api` on the main thread |
| `src/worker` | `sandkit.api` on the worker thread |
| `src/sandkit/engine` | `sandkit.engine` |
| `src/sandkit/enums` | `sandkit.enums` |
| `src/sandkit/react.d.ts` | `sandkit.react` |
| `src/sandkit/index.d.ts` | `Sandkit` shape (`api`, `engine`, …) |
| `src/global.d.ts` | Ambient `sandkit` value + type names |
| `src/shared` | declarations shared by main and worker `api` |
| `src/common-types` | shared domain shapes |

This is a type and documentation project, not runtime code. It does not install
Sandkit or make an API available in the game.

## Runtime entry points

| Entry point | Use it for |
| --- | --- |
| Ambient `sandkit` (`src/global.d.ts`) | Free variable in mod `main.js` (no import) |
| `src/sandkit/api/index.d.ts` | Main-thread `sandkit.api` namespaces |
| `src/worker/index.d.ts` | Worker-thread `sandkit.api` |
| `src/worker/sandkit-api.d.ts` | Composed `WorkerSandkitApi` for `worker.ts` |
| `src/sandkit/engine/index.d.ts` | `sandkit.engine` (prefer `sandkit.api` when possible) |
| `src/sandkit/enums/index.d.ts` | `sandkit.enums` |
| `src/sandkit/index.d.ts` | `Sandkit` shape and related type exports |

The main and worker APIs overlap, but they are not interchangeable. Check the
entry point containing a method before using it in `main.js` or `worker.js`.
Engine methods usually take game state as the first argument and use shorter
names than `sandkit.api`. At runtime `sandkit.state === sandkit.engine.state`.

Mods should use the free name `sandkit` (and ambient types such as `SandkitApi`).
Do not import a value binding for `sandkit`.

## Status and accuracy

Sandustry and Sandkit can change independently of this repository. Some shapes
are intentionally still typed as `unknown`; see [TODO](TODO) for known gaps.
Resolve stable string IDs through the API where possible, and do not treat an
observed numeric element, terrain, structure, or scene value as a permanent ID.

### Internal and engine APIs

`src/sandkit/engine` documents internal, state-first APIs under `sandkit.engine`. These
declarations are best-effort stubs inferred from runtime observation. **There is
no guarantee that they are complete or correct.** Use this documentation and
these types **at your own risk**. Prefer `sandkit.api` when a public method
exists.

If a declaration differs from the current game, please open an issue or pull
request with the Sandustry/Sandkit version, the runtime (`main` or `worker`), and
a small reproduction.

## Build the documentation

Node.js 24 is required by the project.

```sh
npm ci
npm run build
```

TypeDoc writes the generated site to `dist/`.

## Contributing

Keep `sandkit/api`, `worker`, `sandkit/engine`, `sandkit/enums`, and `shared`
declarations in their existing source trees. Prefer a precise type when it has
been confirmed, but leave a value as `unknown` instead of guessing its shape.
Documentation improvements and small, reproducible API discoveries are welcome.

For TypeDoc:

- Prefer `export namespace` for API bags so pages nest as `sandkit.api.ui`, `sandkit.engine.queue`.
- Keep `SandkitReact` shallow so the site does not ingest `@types/react` / DOM.
- Use `{@link sandkit.api.structures.addProcessor}` style links in `docs/*.md`.
- Match new folders to live `sandkit.*` paths when possible (`src/sandkit/api`, …).
