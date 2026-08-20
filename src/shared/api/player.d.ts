import type { Vector2 } from "../../common-types/player";

export namespace player {
  export function getWorldPosition(): Vector2;
  export function isCollidingWithCell(cellX: number, cellY: number): boolean;
  export function isWithinRadiusOfCell(cellX: number, cellY: number, radius: number): boolean;
}
