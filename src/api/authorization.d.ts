import { Player } from "../shared-types/player";

export namespace authorization {
  export function canBuildAtCell(cellX: number, cellY: number): boolean;
  export function canGrabAtCell(cellX: number, cellY: number): boolean;
  export function canUseTool(player: Player, isFlamethrower?: boolean): boolean;
  export function canUseToolAtCell(cellX: number, cellY: number, isFlamethrower?: boolean): boolean;
  export function getZoneIdAtCell(cellX: number, cellY: number): number;
  export function getPlayerZoneId(): number;
}