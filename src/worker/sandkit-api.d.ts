/**
 * Composed worker-thread `sandkit.api` object.
 *
 * Namespace members are documented under {@link worker}. Use this type in
 * `worker.js` / `worker.ts`. Do not use {@link sandkit.SandkitApi} here —
 * main and worker surfaces overlap but are not interchangeable.
 */
export type WorkerSandkitApi = {
  collector: typeof import("../shared/api/collector").collector;
  elements: typeof import("./api/elements").elements;
  fire: typeof import("../shared/api/fire").fire;
  hooks: typeof import("../shared/api/hooks").hooks;
  main: typeof import("./api/main").main;
  maps: typeof import("../shared/api/maps").maps;
  patterns: typeof import("../shared/api/patterns").patterns;
  player: typeof import("../shared/api/player").player;
  random: typeof import("../shared/api/random").random;
  shared: typeof import("./api/shared").shared;
  structures: typeof import("../shared/api/structures").structures;
  terrains: typeof import("../shared/api/terrains").terrains;
  ui: typeof import("../shared/api/ui").ui;
  utils: typeof import("../shared/api/utils").utils;
  worker: typeof import("./api/worker").worker;
  world: typeof import("../shared/api/world").world;
};
