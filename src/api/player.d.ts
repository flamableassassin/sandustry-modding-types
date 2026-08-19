import type { Vector2 } from "../shared-types/player";

export namespace player {
  export function getWorldPosition(): Vector2;
  export function setWorldPosition(worldX: number, worldY: number): void;
  export function setVelocity(velocityX: number, velocityY: number): void;
  export function setMovementSpeedMultiplier(multiplier: number): void;
  export function setMovementMode(mode: 'normal' | 'hover'): boolean;
  export function isOnGround(): boolean;
  export function teleportToGround(): void;
  export function isCollidingWithCell(cellX: number, cellY: number): boolean;
  export function isWithinRadiusOfCell(cellX: number, cellY: number, radius: number): boolean;
  export function isWorldPositionClear(worldX: number, worldY: number): boolean;

  export namespace inventory {
    export function addFromId(itemId: string): void;
  }

  export namespace buildings {
    export function unlockByType(structureId: string): void;
  }
}
