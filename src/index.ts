/**
 * Package entry — shapes mirror the live `sandkit` free variable.
 *
 * Ambient value and type names live in {@link global}. Prefer the free name
 * `sandkit` in mod code (no import).
 *
 * | Path | Live object |
 * | --- | --- |
 * | {@link sandkit.api} | `sandkit.api` (main thread) |
 * | {@link worker} | `sandkit.api` (worker thread) |
 * | {@link sandkit.engine} | `sandkit.engine` |
 * | {@link sandkit.enums} | `sandkit.enums` |
 * | {@link sandkit.Sandkit | Sandkit} | whole `sandkit` object |
 */
export * as api from "./sandkit/api"
export * as worker from "./worker"
export * as engine from "./sandkit/engine"
export * as enums from "./sandkit/enums"
export type {
  Sandkit,
  SandkitEnums,
  SandkitReact,
  SandkitApi,
  SandkitEngine,
  SandkitEngineApi,
  SandkitState,
  RetroConsoleApi,
} from "./sandkit"
