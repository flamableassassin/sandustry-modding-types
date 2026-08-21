import type { ReactElement } from "react";
import type { SandkitApi } from "./main/sandkit-api";
import type { SandkitEngine } from "./engine";

export interface SandkitEnums {
  Scene?: {
    MainMenu: number;
    Intro: number;
  };
  [key: string]: unknown;
}

export type SandkitReact = typeof import("react") & {
  jsx?(type: unknown, props: unknown, key: unknown): ReactElement;
  jsxs?(type: unknown, props: unknown, key: unknown): ReactElement;
};

/**
 * Host-injected `sandkit` global available to mod `main.js`.
 */
export interface SandkitGlobal {
  api: SandkitApi;
  apiVersion?: string;
  enums: SandkitEnums;
  react: SandkitReact;
  engine: SandkitEngine;
  state?: unknown;
}

export type { SandkitApi } from "./main/sandkit-api";
export type { SandkitEngine, SandkitEngineApi, SandkitEngineState, RetroConsoleApi } from "./engine";
