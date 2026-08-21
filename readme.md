# Sandustry modding types

Community-maintained TypeScript declarations and API reference for Sandustry's
Sandkit modding API.

- [Browse the generated API reference](https://flamableassassin.github.io/sandustry-modding-types/)
- [Learn from practical API examples](./docs/api-examples.md)
- [Create a basic mod](./docs/getting-started.md)
- [Understand the main and worker runtimes](./docs/runtime-model.md)
- [Package assets, maps, patches, and Workshop metadata](./docs/mod-packaging.md)

## What this repository provides

The declarations under `src/main` and `src/worker` document the API available
as `sandkit.api` in each runtime. Shared declarations live under `src/shared`.
`src/engine` documents `sandkit.engine` (state-first internals and Retro Console).
`src/sandkit.d.ts` and `src/main/sandkit-api.d.ts` compose the host `sandkit`
global and main-thread `api` object. The generated TypeDoc site makes the
namespaces, methods, parameters, return types, and guide pages searchable in one
place.

This is a type and documentation project, not runtime code. It does not install
Sandkit or make an API available in the game.

## Runtime entry points

| Entry point | Use it for |
| --- | --- |
| `src/main/index.d.ts` | Main-thread APIs such as registration, UI, sprites, and idle-safe world changes |
| `src/worker/index.d.ts` | Manager/simulation worker APIs and direct worker mutation operations |
| `src/engine/index.d.ts` | `sandkit.engine` (prefer `sandkit.api` when the public method exists) |
| `src/sandkit.d.ts` | Host-injected `sandkit` global shape |

The main and worker APIs overlap, but they are not interchangeable. Check the
entry point containing a method before using it in `main.js` or `worker.js`.
Engine methods usually take game state as the first argument and use shorter
names than `sandkit.api`.

## Status and accuracy

Sandustry and Sandkit can change independently of this repository. Some shapes
are intentionally still typed as `unknown`; see [TODO](TODO) for known gaps.
Resolve stable string IDs through the API where possible, and do not treat an
observed numeric element, terrain, structure, or scene value as a permanent ID.

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

Keep main-only, worker-only, and shared declarations in their existing source
trees. Prefer a precise type when it has been confirmed, but leave a value as
`unknown` instead of guessing its shape. Documentation improvements and small,
reproducible API discoveries are welcome.
