import type { Vector2 } from "../shared-types/player";

export namespace world {
  export function getCellIdAtCell(cellX: number, cellY: number): number;
  export function isCellEmptyAtCell(cellX: number, cellY: number): boolean;
  export function isTerrainAtCell(cellX: number, cellY: number): boolean;
  export function runWhenSimulationIdle(callback: () => void): void;
  export function reportActivityAtCell(cellX: number, cellY: number): void;
  export function excavateAtCell(cellX: number, cellY: number, outVelocity: Vector2, damage: number, options?: ExcavateOptions): void;
  export function revealFogAtCell(cellX: number, cellY: number): void;
  export function redrawAroundCellWhenIdle(cellX: number, cellY: number, range: number): void;

  export namespace pickups {
    export function spawnAtWorld(type: WorldItemType, worldX: number, worldY: number, data?: any, light?: WorldItemLight): any;
    export function destroy(worldItem: any): void;
    export function pickUp(worldItem: any): boolean;
    export function getAll(): any[];
    export function getById(worldItemId: number): any;
  }

  export type ExcavateOptions = unknown
  export type WorldItemType = unknown
  export type WorldItemLight = unknown
}