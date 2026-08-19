import { Vector2 } from "../shared-types/player";

export namespace structures {
  export function addProcessor(structureId: string | StructureType, definition: StructureProcessorDefinitionV1): void;
  export function register(definition: SandkitStructureDefinition, options?: { useRawShape?: boolean; }): void;
  export function updateDefinition(structureTypeOrId: string | StructureType, partial: Partial<SandkitStructureDefinition>, options?: { useRawShape?: boolean; }): void;
  export function addVariant(baseStructureTypeOrId: string | StructureType, variant: { id: string | StructureType; angles: number[]; }, options?: { addBuildMode?: any; }): void;
  export function forEachOfType(structureTypeOrId: string | StructureType, callback: (structure: Structure) => void): void;
  export function registerPlacementConfig(definition: PlacementConfigDefinition): void;
  export function getAtCell(cellX: number, cellY: number): Structure | null;
  export function getDefinitionByType(structureType: string | StructureType): any;
  export function getUnlockedTypes(): Set<string | StructureType>;
  export function getTypeFromId(structureId: string): string | StructureType;
  export function hasBuiltAtCell(cellX: number, cellY: number): boolean;
  export function isBlockedByPlayerAtCell(cellX: number, cellY: number): boolean;
  export function isLauncherAtCell(cellX: number, cellY: number): boolean;
  export function isType(structure: Structure | null, structureId: string): boolean;
  export function isTypeAtCell(cellX: number, cellY: number, structureId: string): boolean;
  export function isUnlockedByType(structureType: string | StructureType): boolean;
  export function mapValueToSpritesheetIndex(value: number, thresholds: number[]): number;
  export function setSpritesheetIndex(structure: Structure, index: number): void;
  export function setSpritesheetIndexAtCell(cellX: number, cellY: number, index: number): void;
  export function setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void;
  export function setSpritesheetIndexByValueAtCell(cellX: number, cellY: number, value: number, thresholds: number[]): void;
  export function update(structure: Structure, options?: { propagateToWorkers?: boolean; }): void;
  export function setData(structure: Structure, partial: any, options?: { propagateToWorkers?: boolean; }): void;
  export function buildAtCellWhenIdle(cellX: number, cellY: number, structureTypeOrId: string, options?: any): void;
  export function removeAtCellWhenIdle(cellX: number, cellY: number, options?: { removeCells?: boolean; skipVisuals?: boolean; }): void;
  export function removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: { removeCells?: boolean; preserveUnselectable?: boolean; onlyPositions?: Vector2[]; }): void;
  export function removeAtCellsWhenIdle(positions: Vector2[], options?: { removeCells?: boolean; skipVisuals?: boolean; }): void;


  export namespace recipes {
    export function register(id: 'planterBox', definition: PlanterBoxRecipeDefinitionV1): void;
    export function register(id: 'shaker', definition: ShakerRecipeDefinitionV1): void;
    export function register(id: 'kineticPress', definition: KineticPressRecipeDefinitionV1): void;
    export function register(id: 'condenser' | 'steamDryer' | 'synthesizer' | 'snowmaker' | 'smelter', definition: WeightedRefineryRecipeDefinitionV1): void;
  }

  export namespace processing {
    export function register(id: string, definition: StructureProcessingDefinitionV1): void;
    export function isEnabledAt(cellX: number, cellY: number): boolean;
    export function setEnabledAt(cellX: number, cellY: number, enabled: boolean): boolean;
  }

  export type Structure = unknown
  export type StructureType = unknown
  export type StructureProcessorDefinitionV1 = unknown
  export type SandkitStructureDefinition = unknown
  export type PlacementConfigDefinition = unknown
  export type PlanterBoxRecipeDefinitionV1 = unknown
  export type ShakerRecipeDefinitionV1 = unknown
  export type KineticPressRecipeDefinitionV1 = unknown
  export type WeightedRefineryRecipeDefinitionV1 = unknown
  export type StructureProcessingDefinitionV1 = unknown
}

