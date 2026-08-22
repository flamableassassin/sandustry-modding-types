import type { SandkitEngineApi } from "./sandkit-engine-api";

/** Top-level keys on `sandkit.engine.state`. @internal */
export interface SandkitEngineState {
  environment: unknown;
  sandkit: unknown;
  session: unknown;
  shared: unknown;
  store: unknown;
}

/**
 * Host `sandkit.engine` object.
 *
 * **Internal API — use at your own risk.** These declarations are best-effort
 * stubs. There is no guarantee they are complete or correct. Prefer
 * {@link main | sandkit.api} when a public method exists.
 *
 * @internal
 */
export interface SandkitEngine {
  api: SandkitEngineApi;
  state: SandkitEngineState;
}
