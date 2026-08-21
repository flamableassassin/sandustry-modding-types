/**
 * `sandkit.engine.api` namespaces.
 *
 * Prefer {@link main | sandkit.api (main)} when a method exists there.
 * Engine methods usually take the game state as the first argument and use
 * shorter names. Engine-only members below are stubs until confirmed.
 */

import type { RetroConsoleApi } from "./retro-console";

/** Stub for an unresolved engine method. */
export type EngineFn = (...args: unknown[]) => unknown;

/** Loose bag for namespaces that overlap `sandkit.api` (different names / state-first). */
export type EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>;

/** Engine-only: `sandkit.engine.api.augments`. */
export namespace augments {
  export function getDigLevel(...args: unknown[]): unknown;
  export function getGunLevel(...args: unknown[]): unknown;
  export function getPhaseLevel(...args: unknown[]): unknown;
  export function getRocketAmmoLevel(...args: unknown[]): unknown;
  export function getRocketReloadLevel(...args: unknown[]): unknown;
  export function getSprintCapLevel(...args: unknown[]): unknown;
  export function hasBigDig(...args: unknown[]): unknown;
  export function hasBulletSpeed(...args: unknown[]): unknown;
  export function hasBulletTracer(...args: unknown[]): unknown;
  export function hasKickstartBoost(...args: unknown[]): unknown;
  export function hasPhaseDash(...args: unknown[]): unknown;
  export function hasPhaseDashCharge(...args: unknown[]): unknown;
  export function hasRideBoost(...args: unknown[]): unknown;
  export function hasRocketDamage(...args: unknown[]): unknown;
  export function hasRocketWarhead(...args: unknown[]): unknown;
  export function hasSprintPower(...args: unknown[]): unknown;
  export function hasTripleShot(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.auralite`. */
export namespace auralite {
  export function ensureProducedAtLeast(...args: unknown[]): unknown;
  export function getProduced(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.blueprints`. */
export namespace blueprints {
  /** Runtime property name is `delete`. */
  function _delete(...args: unknown[]): unknown;
  export { _delete as delete };
  export function exportAllString(...args: unknown[]): unknown;
  export function exportString(...args: unknown[]): unknown;
  export function getAll(...args: unknown[]): unknown;
  export function importString(...args: unknown[]): unknown;
  export function load(...args: unknown[]): unknown;
  export function save(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.clipboard`. */
export namespace clipboard {
  export function activate(...args: unknown[]): unknown;
  export function clear(...args: unknown[]): unknown;
  export function get(...args: unknown[]): unknown;
  export function getHistory(...args: unknown[]): unknown;
  export function getSignalLinks(...args: unknown[]): unknown;
  export function selectFromHistory(...args: unknown[]): unknown;
  export function set(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.colorPicker`. */
export namespace colorPicker {
  export const CYCLE_COLOR: unknown;
  export const NO_COLOR: unknown;
  export const PREDEFINED_COLORS: unknown;
  export const RANDOM_COLOR: unknown;
  export function closePalette(...args: unknown[]): unknown;
  export function getActivePalette(...args: unknown[]): unknown;
  export function getCycleColor(...args: unknown[]): unknown;
  export function getRandomColor(...args: unknown[]): unknown;
  export function hexToRgba(...args: unknown[]): unknown;
  export function renderColorButton(...args: unknown[]): unknown;
  export function renderColorSection(...args: unknown[]): unknown;
  export function renderPalette(...args: unknown[]): unknown;
  export function rgbaToHex(...args: unknown[]): unknown;
  export function setActivePalette(...args: unknown[]): unknown;
  export function togglePalette(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.coloringTool`. */
export namespace coloringTool {
  export function colorStructure(...args: unknown[]): unknown;
  export function floodFillColor(...args: unknown[]): unknown;
  export function getColor(...args: unknown[]): unknown;
  export function isColorableStructure(...args: unknown[]): unknown;
  export function isMatchColorMode(...args: unknown[]): unknown;
  export function isPaintBucketMode(...args: unknown[]): unknown;
  export function setColor(...args: unknown[]): unknown;
  export function toggleMatchColorMode(...args: unknown[]): unknown;
  export function togglePaintBucketMode(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.conveyors`. */
export namespace conveyors {
  export function registerType(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.debug`. */
export namespace debug {
  export function register(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.drones`. */
export namespace drones {
  export function kill(...args: unknown[]): unknown;
  export function spawn(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.entities`. */
export namespace entities {
  export function createLight(...args: unknown[]): unknown;
  export function getAll(...args: unknown[]): unknown;
  export function getAllByType(...args: unknown[]): unknown;
  export function getAllTypeDefs(...args: unknown[]): unknown;
  export function getSprite(...args: unknown[]): unknown;
  export function getTypeDef(...args: unknown[]): unknown;
  export function launch(...args: unknown[]): unknown;
  export function registerSpawner(...args: unknown[]): unknown;
  export function registerType(...args: unknown[]): unknown;
  export function spawn(...args: unknown[]): unknown;
  export function startCapture(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.extensions`. */
export namespace extensions {
  export function define(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.factory`. */
export namespace factory {
  export function addViabilityGold(...args: unknown[]): unknown;
  export function canUnlockNextTier(...args: unknown[]): unknown;
  export function ensureProcessAtLeast(...args: unknown[]): unknown;
  export function flushDeferredLevelUps(...args: unknown[]): unknown;
  export function getLevel(...args: unknown[]): unknown;
  export function getProcessCount(...args: unknown[]): unknown;
  export function getProcessRate(...args: unknown[]): unknown;
  export function recordProcess(...args: unknown[]): unknown;
  export function unlockNextTier(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.foliage`. */
export namespace foliage {
  export function generate(...args: unknown[]): unknown;
  export function getClusters(...args: unknown[]): unknown;
  export function getContainer(...args: unknown[]): unknown;
  export function hasProcgenData(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.foundationColorPicker`. */
export namespace foundationColorPicker {
  export function getColor(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.game`. */
export namespace game {
  export function load(...args: unknown[]): unknown;
  export function save(...args: unknown[]): unknown;
  export function start(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.heatTransfer`. */
export namespace heatTransfer {
  export function absorbAdjacentElements(...args: unknown[]): unknown;
  export function addTemperature(...args: unknown[]): unknown;
  export function computeDiffusedTemperatures(...args: unknown[]): unknown;
  export function computeEqualizedTemperature(...args: unknown[]): unknown;
  export function consumeTemperatureNear(...args: unknown[]): unknown;
  export function ensureTemperature(...args: unknown[]): unknown;
  export function equalizeConnected(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.launchers`. */
export namespace launchers {
  export function registerType(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.lightColorPicker`. */
export namespace lightColorPicker {
  export function getColor(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.matters`. */
export namespace matters {
  export function getMatterTypeFromId(...args: unknown[]): unknown;
  export function register(...args: unknown[]): unknown;
  export function runSolidUpdate(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.misc`. */
export namespace misc {
  export function register(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.portals`. */
export namespace portals {
  export function getMarkers(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.prefabData`. */
export namespace prefabData {
  export function getAll(...args: unknown[]): unknown;
  export function getAllMetadata(...args: unknown[]): unknown;
  export function getArtifactLocations(...args: unknown[]): unknown;
  export function getAtCell(...args: unknown[]): unknown;
  export function getMetadata(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.prefabDecor`. */
export namespace prefabDecor {
  export function getPlacementByName(...args: unknown[]): unknown;
  export function replaceDecor(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.prefabulator`. */
export namespace prefabulator {
  export function localizeBlueprintStructures(...args: unknown[]): unknown;
  export function serializeBlueprintStructures(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.prismaline`. */
export namespace prismaline {
  export function consume(...args: unknown[]): unknown;
  export function getAvailable(...args: unknown[]): unknown;
  export function getConsumed(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.prismite`. */
export namespace prismite {
  export function consume(...args: unknown[]): unknown;
  export function getAvailable(...args: unknown[]): unknown;
  export function getConsumed(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.queue`. */
export namespace queue {
  export function enqueue(...args: unknown[]): unknown;
  export function enqueueInTicks(...args: unknown[]): unknown;
  export function enqueueSkipTick(...args: unknown[]): unknown;
  export function process(...args: unknown[]): unknown;
  export function registerHandler(...args: unknown[]): unknown;
  export function removeByKey(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.shadows`. */
export namespace shadows {
  export function refresh(...args: unknown[]): unknown;
  export function refreshRadius(...args: unknown[]): unknown;
  export function refreshRect(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.strataform`. */
export namespace strataform {
  export function getDefaultConfig(...args: unknown[]): unknown;
  export function getRegisteredTypes(...args: unknown[]): unknown;
  export function registerType(...args: unknown[]): unknown;
  export function trigger(...args: unknown[]): unknown;
  export function triggerByType(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.swarmConsole`. */
export namespace swarmConsole {
  export function decrementConvergenceBuffer(...args: unknown[]): unknown;
  export function getCrystalMined(...args: unknown[]): unknown;
  export function getDiskRadiusCells(...args: unknown[]): unknown;
  export function getEntityType(...args: unknown[]): unknown;
  export function getNearestConvergence(...args: unknown[]): unknown;
  export function getPendingConvergence(...args: unknown[]): unknown;
  export function getPlacedConsoles(...args: unknown[]): unknown;
  export function getRadiusPx(...args: unknown[]): unknown;
  export function isSpawnJammed(...args: unknown[]): unknown;
  export function registerEntityType(...args: unknown[]): unknown;
  export function resetAllConvergenceBuffers(...args: unknown[]): unknown;
  export function setSpawnJammed(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.sweeperDrone`. */
export namespace sweeperDrone {
  export function cancelSelection(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.teleportZones`. */
export namespace teleportZones {
  export function add(...args: unknown[]): unknown;
  export function getAll(...args: unknown[]): unknown;
  export function getAtCell(...args: unknown[]): unknown;
  export function getById(...args: unknown[]): unknown;
  export function remove(...args: unknown[]): unknown;
  export function spawnDefaultParticles(...args: unknown[]): unknown;
  export function teleportPlayerTo(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.tutorialBuild`. */
export namespace tutorialBuild {
  export function areAllTargetsBuilt(...args: unknown[]): unknown;
  export function areFamilyTargetsBuilt(...args: unknown[]): unknown;
  export function canPlaceAtActiveTarget(...args: unknown[]): unknown;
  export function getFoundationMoveDests(...args: unknown[]): unknown;
  export function getFoundationMoveSources(...args: unknown[]): unknown;
  export function getTargets(...args: unknown[]): unknown;
  export function hasDefinition(...args: unknown[]): unknown;
  export function isStepConstrained(...args: unknown[]): unknown;
  export function matchesFoundationMove(...args: unknown[]): unknown;
  export function matchesFoundationRemove(...args: unknown[]): unknown;
  export function shouldProtectActiveTargetAt(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.usageTracker`. */
export namespace usageTracker {
  export function clear(...args: unknown[]): unknown;
  export function getLatest(...args: unknown[]): unknown;
  export function getMostUsed(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.wall`. */
export namespace wall {
  export function getPaletteData(...args: unknown[]): unknown;
  export function getWallDataAt(...args: unknown[]): unknown;
  export function getWallDataSize(...args: unknown[]): unknown;
  export function setWallDataAt(...args: unknown[]): unknown;
}

/** Engine-only: `sandkit.engine.api.workerLocal`. */
export namespace workerLocal {
  export function clear(...args: unknown[]): unknown;
  export function get(...args: unknown[]): unknown;
  export function getOrInit(...args: unknown[]): unknown;
  export function set(...args: unknown[]): unknown;
}

/**
 * Composed `sandkit.engine.api` shape.
 * Overlap namespaces are loose; engine-only namespaces are declared above.
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
  augments: typeof augments;
  auralite: typeof auralite;
  blueprints: typeof blueprints;
  clipboard: typeof clipboard;
  colorPicker: typeof colorPicker;
  coloringTool: typeof coloringTool;
  conveyors: typeof conveyors;
  debug: typeof debug;
  drones: typeof drones;
  entities: typeof entities;
  extensions: typeof extensions;
  factory: typeof factory;
  foliage: typeof foliage;
  foundationColorPicker: typeof foundationColorPicker;
  game: typeof game;
  heatTransfer: typeof heatTransfer;
  launchers: typeof launchers;
  lightColorPicker: typeof lightColorPicker;
  matters: typeof matters;
  misc: typeof misc;
  portals: typeof portals;
  prefabData: typeof prefabData;
  prefabDecor: typeof prefabDecor;
  prefabulator: typeof prefabulator;
  prismaline: typeof prismaline;
  prismite: typeof prismite;
  queue: typeof queue;
  shadows: typeof shadows;
  strataform: typeof strataform;
  swarmConsole: typeof swarmConsole;
  sweeperDrone: typeof sweeperDrone;
  teleportZones: typeof teleportZones;
  tutorialBuild: typeof tutorialBuild;
  usageTracker: typeof usageTracker;
  wall: typeof wall;
  workerLocal: typeof workerLocal;
  config: EngineFn;
  extend: EngineFn;
  retroConsole: RetroConsoleApi;
};

/** Top-level keys on `sandkit.engine.state`. */
export interface SandkitEngineState {
  environment: unknown;
  sandkit: unknown;
  session: unknown;
  shared: unknown;
  store: unknown;
}

/** Host `sandkit.engine` object. */
export interface SandkitEngine {
  api: SandkitEngineApi;
  state: SandkitEngineState;
}
