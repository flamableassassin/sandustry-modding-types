import type { Vector2 } from "../../common-types/player";

export namespace world {
  export function getCellIdAtCell(cellX: number, cellY: number): number;
  export function isCellEmptyAtCell(cellX: number, cellY: number): boolean;
  export function isTerrainAtCell(cellX: number, cellY: number): boolean;
  export function reportActivityAtCell(cellX: number, cellY: number): void;
  export function excavateAtCell(cellX: number, cellY: number, outVelocity: Vector2, damage: number, options?: ExcavateOptions): void;

  export type ExcavateOptions = unknown
}