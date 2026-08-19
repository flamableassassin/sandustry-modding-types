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

  export type InteractionDestroyer = { kind: "destroyer", items: e };
  export type InteractionStructure = { kind: "structure", structures: r };
  export type InteractionEntity = { kind: "entity", entities: e };
  export type InteractionFlammable = { kind: "flammable" };
  export type InteractionMeltable = { kind: "meltable" };
  export type InteractionFreezable = { kind: "freezable" };
  export type InteractionCustom = { kind: "custom" };
  export type Interaction = InteractionDestroyer
    | InteractionStructure
    | InteractionEntity
    | InteractionFlammable
    | InteractionMeltable
    | InteractionFreezable
    | InteractionCustom;

  export function getRegisteredTypes(): ElementType[];
  export function register(definition: ElementDefinition): { elementType: ElementType; };
  export function updateDefinition(elementTypeOrId: string | ElementType, partial: Partial<ElementDefinition>): void;
  export function addInteractionInfo(elementTypeOrId: string | ElementType, interaction: Interaction): void;
  export function getTypeFromId(elementId: string): ElementType;
  export function getNameByType(elementType: number): string;
  export function getDefinitionByType(elementType: ElementType): ElementDefinition | undefined;
  export function getTypeAtCell(cellX: number, cellY: number): ElementType | null;
  export function getResolvedTypeAtCell(cellX: number, cellY: number): ElementType | null;
  export function getResolvedTypeFromCellId(cellId: number): ElementType | null;
  export function getInfoAtCell(cellX: number, cellY: number): { elementType: ElementType; isParticle: boolean; cellId: number; elementIndex: number; } | null;
  export function getMatterTypeAtCell(cellX: number, cellY: number): MatterType | null;
  export function isTypeAtCell(cellX: number, cellY: number, elementType: ElementType): boolean;
  export function isFreeFallingAtCell(cellX: number, cellY: number): boolean;
  export function findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSize: number): { x: number; y: number; } | null;
  export function createAtCellWhenIdle(cellX: number, cellY: number, elementType: ElementType, options?: ElementCreateOptions): void;
  export function replaceAtCellWhenIdle(cellX: number, cellY: number, elementType: ElementType, options?: ElementCreateOptions): void;
  export function removeAtCellWhenIdle(cellX: number, cellY: number, options?: ElementRemovalOptions): void;
  export function teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void;
  export function getVelocityAtCell(cellX: number, cellY: number): { x: number; y: number; } | null;
  export function setVelocityAtCellWhenIdle(cellX: number, cellY: number, velocity: { x: number; y: number; }): void;
  export function addParticleVelocityAtCellWhenIdle(cellX: number, cellY: number, velocity: { x: number; y: number; }, maxSpeed?: number): void;
  export function convertToParticleAtCellWhenIdle(cellX: number, cellY: number, velocity: { x: number; y: number; }): void;
  export function convertFromParticleAtCellWhenIdle(cellX: number, cellY: number): void;
  export function getDataFieldAtCell(cellX: number, cellY: number, fieldNumber: 1 | 2 | 3 | 4): number | null;
  export function setDataFieldAtCellWhenIdle(cellX: number, cellY: number, fieldNumber: 1 | 2 | 3 | 4, value: number): void;
  export function refreshColorAtCellWhenIdle(cellX: number, cellY: number): void;
  export function setPhysicsAtCellWhenIdle(cellX: number, cellY: number, physicsState: number): void;
  export function setDurationAtCellWhenIdle(cellX: number, cellY: number, duration: number, options?: { updateMax?: boolean; }): void;

  export type ElementCreateOptions = unknown
  export type ElementRemovalOptions = unknown
  export type e = unknown
  export type r = unknown
}

