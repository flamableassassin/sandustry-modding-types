import type { Vector2 } from "../shared-types/player";
export namespace patterns {
  export function createCircle(size: number): number[][];
  export function excavateAtCell(cellX: number, cellY: number, pattern: number[][], outVelocity: Vector2, power: number, options?: PatternExcavateOptions): void;

  export type PatternExcavateOptions = unknown
}