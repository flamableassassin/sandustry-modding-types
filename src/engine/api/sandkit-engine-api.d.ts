import type { RetroConsoleApi } from "../retro-console";
import type { EngineFn, EngineOverlapNs } from "./types";

/**
 * Composed `sandkit.engine.api` shape.
 * Overlap namespaces are loose; engine-only namespaces are declared above.
 *
 * @internal
 */
export type SandkitEngineApi = {
  // --- Overlap with sandkit.api (prefer the public API) ---
  action: EngineOverlapNs;
  authorization: EngineOverlapNs;
  building: EngineOverlapNs;
  camera: EngineOverlapNs;
  collector: EngineOverlapNs;
  constants: EngineOverlapNs;
  cooldown: EngineOverlapNs;
  discoveries: EngineOverlapNs;
  effects: EngineOverlapNs;
  elements: EngineOverlapNs;
  energy: EngineOverlapNs;
  events: EngineOverlapNs;
  excavation: EngineOverlapNs;
  fire: EngineOverlapNs;
  grid: EngineOverlapNs;
  hooks: EngineOverlapNs;
  i18n: EngineOverlapNs;
  input: EngineOverlapNs;
  items: EngineOverlapNs;
  lights: EngineOverlapNs;
  maps: EngineOverlapNs;
  patterns: EngineOverlapNs;
  player: EngineOverlapNs;
  processing: EngineOverlapNs;
  progression: EngineOverlapNs;
  projectiles: EngineOverlapNs;
  random: EngineOverlapNs;
  raycast: EngineOverlapNs;
  reactions: EngineOverlapNs;
  rendering: EngineOverlapNs;
  resources: EngineOverlapNs;
  scene: EngineOverlapNs;
  schedule: EngineOverlapNs;
  signals: EngineOverlapNs;
  sound: EngineOverlapNs;
  sprites: EngineOverlapNs;
  storage: EngineOverlapNs;
  structures: EngineOverlapNs;
  tech: EngineOverlapNs;
  terrains: EngineOverlapNs;
  tools: EngineOverlapNs;
  triggers: EngineOverlapNs;
  ui: EngineOverlapNs;
  upgrades: EngineOverlapNs;
  utils: EngineOverlapNs;
  workers: EngineOverlapNs;
  world: EngineOverlapNs;

  // --- Engine-only ---
  augments: typeof import("./augments").augments;
  auralite: typeof import("./auralite").auralite;
  blueprints: typeof import("./blueprints").blueprints;
  clipboard: typeof import("./clipboard").clipboard;
  colorPicker: typeof import("./colorPicker").colorPicker;
  coloringTool: typeof import("./coloringTool").coloringTool;
  conveyors: typeof import("./conveyors").conveyors;
  debug: typeof import("./debug").debug;
  drones: typeof import("./drones").drones;
  entities: typeof import("./entities").entities;
  extensions: typeof import("./extensions").extensions;
  factory: typeof import("./factory").factory;
  foliage: typeof import("./foliage").foliage;
  foundationColorPicker: typeof import("./foundationColorPicker").foundationColorPicker;
  game: typeof import("./game").game;
  heatTransfer: typeof import("./heatTransfer").heatTransfer;
  launchers: typeof import("./launchers").launchers;
  lightColorPicker: typeof import("./lightColorPicker").lightColorPicker;
  matters: typeof import("./matters").matters;
  misc: typeof import("./misc").misc;
  portals: typeof import("./portals").portals;
  prefabData: typeof import("./prefabData").prefabData;
  prefabDecor: typeof import("./prefabDecor").prefabDecor;
  prefabulator: typeof import("./prefabulator").prefabulator;
  prismaline: typeof import("./prismaline").prismaline;
  prismite: typeof import("./prismite").prismite;
  queue: typeof import("./queue").queue;
  shadows: typeof import("./shadows").shadows;
  strataform: typeof import("./strataform").strataform;
  swarmConsole: typeof import("./swarmConsole").swarmConsole;
  sweeperDrone: typeof import("./sweeperDrone").sweeperDrone;
  teleportZones: typeof import("./teleportZones").teleportZones;
  tutorialBuild: typeof import("./tutorialBuild").tutorialBuild;
  usageTracker: typeof import("./usageTracker").usageTracker;
  wall: typeof import("./wall").wall;
  workerLocal: typeof import("./workerLocal").workerLocal;
  config: EngineFn;
  extend: EngineFn;
  retroConsole: RetroConsoleApi;
};
