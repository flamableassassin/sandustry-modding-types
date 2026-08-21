/**
 * `sandkit.engine` shapes.
 *
 * Prefer `sandkit.api` when a method exists there. Engine methods usually
 * take the game state as the first argument and use shorter names.
 * Engine-only namespaces below are stubs (`unknown`) until confirmed.
 */

import type { RetroConsoleApi } from "./retro-console";

/** Stub for an unresolved engine method. */
export type EngineFn = (...args: unknown[]) => unknown;

/** Loose bag for namespaces that overlap `sandkit.api` (different names / state-first). */
export type EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>;

export interface EngineAugmentsNs {
  getDigLevel: EngineFn;
  getGunLevel: EngineFn;
  getPhaseLevel: EngineFn;
  getRocketAmmoLevel: EngineFn;
  getRocketReloadLevel: EngineFn;
  getSprintCapLevel: EngineFn;
  hasBigDig: EngineFn;
  hasBulletSpeed: EngineFn;
  hasBulletTracer: EngineFn;
  hasKickstartBoost: EngineFn;
  hasPhaseDash: EngineFn;
  hasPhaseDashCharge: EngineFn;
  hasRideBoost: EngineFn;
  hasRocketDamage: EngineFn;
  hasRocketWarhead: EngineFn;
  hasSprintPower: EngineFn;
  hasTripleShot: EngineFn;
}

export interface EngineAuraliteNs {
  ensureProducedAtLeast: EngineFn;
  getProduced: EngineFn;
}

export interface EngineBlueprintsNs {
  delete: EngineFn;
  exportAllString: EngineFn;
  exportString: EngineFn;
  getAll: EngineFn;
  importString: EngineFn;
  load: EngineFn;
  save: EngineFn;
}

export interface EngineClipboardNs {
  activate: EngineFn;
  clear: EngineFn;
  get: EngineFn;
  getHistory: EngineFn;
  getSignalLinks: EngineFn;
  selectFromHistory: EngineFn;
  set: EngineFn;
}

export interface EngineColorPickerNs {
  CYCLE_COLOR: unknown;
  NO_COLOR: unknown;
  PREDEFINED_COLORS: unknown;
  RANDOM_COLOR: unknown;
  closePalette: EngineFn;
  getActivePalette: EngineFn;
  getCycleColor: EngineFn;
  getRandomColor: EngineFn;
  hexToRgba: EngineFn;
  renderColorButton: EngineFn;
  renderColorSection: EngineFn;
  renderPalette: EngineFn;
  rgbaToHex: EngineFn;
  setActivePalette: EngineFn;
  togglePalette: EngineFn;
}

export interface EngineColoringToolNs {
  colorStructure: EngineFn;
  floodFillColor: EngineFn;
  getColor: EngineFn;
  isColorableStructure: EngineFn;
  isMatchColorMode: EngineFn;
  isPaintBucketMode: EngineFn;
  setColor: EngineFn;
  toggleMatchColorMode: EngineFn;
  togglePaintBucketMode: EngineFn;
}

export interface EngineConveyorsNs {
  registerType: EngineFn;
}

export interface EngineDebugNs {
  register: EngineFn;
}

export interface EngineDronesNs {
  kill: EngineFn;
  spawn: EngineFn;
}

export interface EngineEntitiesNs {
  createLight: EngineFn;
  getAll: EngineFn;
  getAllByType: EngineFn;
  getAllTypeDefs: EngineFn;
  getSprite: EngineFn;
  getTypeDef: EngineFn;
  launch: EngineFn;
  registerSpawner: EngineFn;
  registerType: EngineFn;
  spawn: EngineFn;
  startCapture: EngineFn;
}

export interface EngineExtensionsNs {
  define: EngineFn;
}

export interface EngineFactoryNs {
  addViabilityGold: EngineFn;
  canUnlockNextTier: EngineFn;
  ensureProcessAtLeast: EngineFn;
  flushDeferredLevelUps: EngineFn;
  getLevel: EngineFn;
  getProcessCount: EngineFn;
  getProcessRate: EngineFn;
  recordProcess: EngineFn;
  unlockNextTier: EngineFn;
}

export interface EngineFoliageNs {
  generate: EngineFn;
  getClusters: EngineFn;
  getContainer: EngineFn;
  hasProcgenData: EngineFn;
}

export interface EngineFoundationColorPickerNs {
  getColor: EngineFn;
}

export interface EngineGameNs {
  load: EngineFn;
  save: EngineFn;
  start: EngineFn;
}

export interface EngineHeatTransferNs {
  absorbAdjacentElements: EngineFn;
  addTemperature: EngineFn;
  computeDiffusedTemperatures: EngineFn;
  computeEqualizedTemperature: EngineFn;
  consumeTemperatureNear: EngineFn;
  ensureTemperature: EngineFn;
  equalizeConnected: EngineFn;
}

export interface EngineLaunchersNs {
  registerType: EngineFn;
}

export interface EngineLightColorPickerNs {
  getColor: EngineFn;
}

export interface EngineMattersNs {
  getMatterTypeFromId: EngineFn;
  register: EngineFn;
  runSolidUpdate: EngineFn;
}

export interface EngineMiscNs {
  register: EngineFn;
}

export interface EnginePortalsNs {
  getMarkers: EngineFn;
}

export interface EnginePrefabDataNs {
  getAll: EngineFn;
  getAllMetadata: EngineFn;
  getArtifactLocations: EngineFn;
  getAtCell: EngineFn;
  getMetadata: EngineFn;
}

export interface EnginePrefabDecorNs {
  getPlacementByName: EngineFn;
  replaceDecor: EngineFn;
}

export interface EnginePrefabulatorNs {
  localizeBlueprintStructures: EngineFn;
  serializeBlueprintStructures: EngineFn;
}

export interface EnginePrismalineNs {
  consume: EngineFn;
  getAvailable: EngineFn;
  getConsumed: EngineFn;
}

export interface EnginePrismiteNs {
  consume: EngineFn;
  getAvailable: EngineFn;
  getConsumed: EngineFn;
}

export interface EngineQueueNs {
  enqueue: EngineFn;
  enqueueInTicks: EngineFn;
  enqueueSkipTick: EngineFn;
  process: EngineFn;
  registerHandler: EngineFn;
  removeByKey: EngineFn;
}

export interface EngineShadowsNs {
  refresh: EngineFn;
  refreshRadius: EngineFn;
  refreshRect: EngineFn;
}

export interface EngineStrataformNs {
  getDefaultConfig: EngineFn;
  getRegisteredTypes: EngineFn;
  registerType: EngineFn;
  trigger: EngineFn;
  triggerByType: EngineFn;
}

export interface EngineSwarmConsoleNs {
  decrementConvergenceBuffer: EngineFn;
  getCrystalMined: EngineFn;
  getDiskRadiusCells: EngineFn;
  getEntityType: EngineFn;
  getNearestConvergence: EngineFn;
  getPendingConvergence: EngineFn;
  getPlacedConsoles: EngineFn;
  getRadiusPx: EngineFn;
  isSpawnJammed: EngineFn;
  registerEntityType: EngineFn;
  resetAllConvergenceBuffers: EngineFn;
  setSpawnJammed: EngineFn;
}

export interface EngineSweeperDroneNs {
  cancelSelection: EngineFn;
}

export interface EngineTeleportZonesNs {
  add: EngineFn;
  getAll: EngineFn;
  getAtCell: EngineFn;
  getById: EngineFn;
  remove: EngineFn;
  spawnDefaultParticles: EngineFn;
  teleportPlayerTo: EngineFn;
}

export interface EngineTutorialBuildNs {
  areAllTargetsBuilt: EngineFn;
  areFamilyTargetsBuilt: EngineFn;
  canPlaceAtActiveTarget: EngineFn;
  getFoundationMoveDests: EngineFn;
  getFoundationMoveSources: EngineFn;
  getTargets: EngineFn;
  hasDefinition: EngineFn;
  isStepConstrained: EngineFn;
  matchesFoundationMove: EngineFn;
  matchesFoundationRemove: EngineFn;
  shouldProtectActiveTargetAt: EngineFn;
}

export interface EngineUsageTrackerNs {
  clear: EngineFn;
  getLatest: EngineFn;
  getMostUsed: EngineFn;
}

export interface EngineWallNs {
  getPaletteData: EngineFn;
  getWallDataAt: EngineFn;
  getWallDataSize: EngineFn;
  setWallDataAt: EngineFn;
}

export interface EngineWorkerLocalNs {
  clear: EngineFn;
  get: EngineFn;
  getOrInit: EngineFn;
  set: EngineFn;
}

export interface SandkitEngineApi {
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
  augments: EngineAugmentsNs;
  auralite: EngineAuraliteNs;
  blueprints: EngineBlueprintsNs;
  clipboard: EngineClipboardNs;
  colorPicker: EngineColorPickerNs;
  coloringTool: EngineColoringToolNs;
  conveyors: EngineConveyorsNs;
  debug: EngineDebugNs;
  drones: EngineDronesNs;
  entities: EngineEntitiesNs;
  extensions: EngineExtensionsNs;
  factory: EngineFactoryNs;
  foliage: EngineFoliageNs;
  foundationColorPicker: EngineFoundationColorPickerNs;
  game: EngineGameNs;
  heatTransfer: EngineHeatTransferNs;
  launchers: EngineLaunchersNs;
  lightColorPicker: EngineLightColorPickerNs;
  matters: EngineMattersNs;
  misc: EngineMiscNs;
  portals: EnginePortalsNs;
  prefabData: EnginePrefabDataNs;
  prefabDecor: EnginePrefabDecorNs;
  prefabulator: EnginePrefabulatorNs;
  prismaline: EnginePrismalineNs;
  prismite: EnginePrismiteNs;
  queue: EngineQueueNs;
  shadows: EngineShadowsNs;
  strataform: EngineStrataformNs;
  swarmConsole: EngineSwarmConsoleNs;
  sweeperDrone: EngineSweeperDroneNs;
  teleportZones: EngineTeleportZonesNs;
  tutorialBuild: EngineTutorialBuildNs;
  usageTracker: EngineUsageTrackerNs;
  wall: EngineWallNs;
  workerLocal: EngineWorkerLocalNs;
  config: EngineFn;
  extend: EngineFn;
  retroConsole: RetroConsoleApi;
}

export interface SandkitEngineState {
  environment: unknown;
  sandkit: unknown;
  session: unknown;
  shared: unknown;
  store: unknown;
}

export interface SandkitEngine {
  api: SandkitEngineApi;
  state: SandkitEngineState;
}
