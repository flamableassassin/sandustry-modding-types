export namespace terrains {
  export function getTypeFromId(terrainId: string): number;
  export function getTypeAtCell(cellX: number, cellY: number): number | null;
  export function getDataAtCell(cellX: number, cellY: number): { cellType: number; hp: number | null; } | null;
  export function isAtCell(cellX: number, cellY: number): boolean;
  export function isTypeAtCell(cellX: number, cellY: number, terrainId: string): boolean;
  export function isCellIdTerrain(cellId: number): boolean;
  export function damageAtCell(cellX: number, cellY: number, damage: number): void;
  export function createAtCell(cellX: number, cellY: number, terrainTypeOrId: string | number, options?: TerrainMutationOptions): void;
  export function replaceAtCell(cellX: number, cellY: number, terrainTypeOrId: string | number, options?: TerrainMutationOptions): void;
  export function removeAtCell(cellX: number, cellY: number, options?: TerrainMutationOptions): void

  export type TerrainMutationOptions = unknown
}