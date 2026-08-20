export namespace elements {
  export type ElementType = number;
  export enum MatterType {
    Solid = 1,
    Liquid = 2,
    Particle = 3,
    Gas = 4,
    Static = 5,
    Slushy = 6,
    Wisp = 7,
    Powder = 8,
  }
  export type ElementDefinition = {
    id: string,
    nameKey: string,
    defaultDataFields?: { [key: string]: number },
    colors: {
      variantFromDataField1?: {
        rangeMin?: number,
        rangeMax?: number,
        invert?: boolean,
        useGradient?: boolean,
      },
      variants: [number, number, number][],
    },
    density: number,
    matterType: MatterType,
    getExtraProps?: () => { data: Record<PropertyKey, any> }
  };

  export function getTypeFromId(elementId: string): ElementType;
  export function getDefinitionByType(elementType: ElementType): ElementDefinition | undefined;
  export function getTypeAtCell(cellX: number, cellY: number): ElementType | null;
  export function getResolvedTypeAtCell(cellX: number, cellY: number): ElementType | null;
  export function getResolvedTypeFromCellId(cellId: number): ElementType | null;
  export function getInfoAtCell(cellX: number, cellY: number): { elementType: ElementType; isParticle: boolean; cellId: number; elementIndex: number; } | null;
  export function getMatterTypeAtCell(cellX: number, cellY: number): MatterType | null;
  export function isTypeAtCell(cellX: number, cellY: number, elementType: ElementType): boolean;
  export function isFreeFallingAtCell(cellX: number, cellY: number): boolean;
  export function getVelocityAtCell(cellX: number, cellY: number): { x: number; y: number; } | null;
  export function getDataFieldAtCell(cellX: number, cellY: number, fieldNumber: 1 | 2 | 3 | 4): number | null;
}

