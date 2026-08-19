export namespace terrains {
  export function register(definition: TerrainDefinition): { cellType: number; };
  export function updateDefinition(cellTypeOrId: string | number, partial: Partial<TerrainDefinition>): void;
  export function getTypeFromId(terrainId: string): number;
  export function getTypeAtCell(cellX: number, cellY: number): number | null;
  export function getDataAtCell(cellX: number, cellY: number): { cellType: number; hp: number | null; } | null;
  export function isAtCell(cellX: number, cellY: number): boolean;
  export function isTypeAtCell(cellX: number, cellY: number, terrainId: string): boolean;
  export function isCellIdTerrain(cellId: number): boolean;
  export function createAtCellWhenIdle(cellX: number, cellY: number, terrainTypeOrId: string | number, options?: TerrainMutationOptions): void;
  export function replaceAtCellWhenIdle(cellX: number, cellY: number, terrainTypeOrId: string | number, options?: TerrainMutationOptions): void;
  export function removeAtCellWhenIdle(cellX: number, cellY: number, options?: TerrainMutationOptions): void;
  export function damageAtCell(cellX: number, cellY: number, damage: number): void;
  export function setHpAtCellWhenIdle(cellX: number, cellY: number, hp: number): void;
  export function createAtCell(cellX: number, cellY: number, terrainTypeOrId: string | number, options?: TerrainMutationOptions): void;
  export function replaceAtCell(cellX: number, cellY: number, terrainTypeOrId: string | number, options?: TerrainMutationOptions): void;
  export function removeAtCell(cellX: number, cellY: number, options?: TerrainMutationOptions): void
  export function setHpAtCell(cellX: number, cellY: number, hp: number): boolean;

  export type TerrainDefinition = unknown
  export type TerrainMutationOptions = unknown
}