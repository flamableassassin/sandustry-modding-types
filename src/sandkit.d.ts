import type { SandkitApi } from "./main/sandkit-api";
import type { SandkitEngine } from "./engine";

/**
 * Known values under `sandkit.enums`. Additional enum bags may exist at runtime.
 */
export interface SandkitEnums {
  Scene?: {
    MainMenu: number;
    Intro: number;
  };
  [key: string]: unknown;
}

/**
 * Host React runtime from `sandkit.react`.
 *
 * Kept intentionally shallow so TypeDoc does not ingest `@types/react` / DOM lib
 * surfaces. Mods should import `react` through the template jsx runtime.
 */
export interface SandkitReact {
  jsx?(type: unknown, props: unknown, key: unknown): unknown;
  jsxs?(type: unknown, props: unknown, key: unknown): unknown;
  createElement?(...args: unknown[]): unknown;
  readonly [key: string]: unknown;
}

/**
 * Host-injected `sandkit` global available to mod `main.js`.
 */
export interface SandkitGlobal {
  /** Prefer this for mod code. See {@link main}. */
  api: SandkitApi;
  apiVersion?: string;
  enums: SandkitEnums;
  react: SandkitReact;
  /**
   * State-first internals. Prefer {@link SandkitGlobal.api | sandkit.api} when a
   * public method exists. See {@link engine}.
   */
  engine: SandkitEngine;
  state?: unknown;
}

export type { SandkitApi } from "./main/sandkit-api";
export type { SandkitEngine, SandkitEngineApi, SandkitEngineState, RetroConsoleApi } from "./engine";
