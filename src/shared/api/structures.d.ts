export namespace structures {
  export function forEachOfType(structureTypeOrId: string | StructureType, callback: (structure: Structure) => void): void;
  export function getAtCell(cellX: number, cellY: number): Structure | null;
  export function getDefinitionByType(structureType: string | StructureType): any;
  export function getTypeFromId(structureId: string): string | StructureType;
  export function hasBuiltAtCell(cellX: number, cellY: number): boolean;
  export function isType(structure: Structure | null, structureId: string): boolean;
  export function isTypeAtCell(cellX: number, cellY: number, structureId: string): boolean;
  export function setSpritesheetIndex(structure: Structure, index: number): void;
  export function setSpritesheetIndexAtCell(cellX: number, cellY: number, index: number): void;
  export function setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void;
  export function setSpritesheetIndexByValueAtCell(cellX: number, cellY: number, value: number, thresholds: number[]): void;
  export function update(structure: Structure, options?: { propagateToWorkers?: boolean; }): void;
  export function setData(structure: Structure, partial: any, options?: { propagateToWorkers?: boolean; }): void;

  export namespace processing {
    export function isEnabledAt(cellX: number, cellY: number): boolean;
  }

  export type Structure = unknown
  export type StructureType = unknown
}

