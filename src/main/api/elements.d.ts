import { elements as sharedElements } from "../../shared/api/elements";

export namespace elements {


  // Shared types
  export import ElementType = sharedElements.ElementType
  export import MatterType = sharedElements.MatterType
  export import ElementDefinition = sharedElements.ElementDefinition
  export import getTypeFromId = sharedElements.getTypeFromId
  export import getDefinitionByType = sharedElements.getDefinitionByType
  export import getTypeAtCell = sharedElements.getTypeAtCell
  export import getResolvedTypeAtCell = sharedElements.getResolvedTypeAtCell
  export import getResolvedTypeFromCellId = sharedElements.getResolvedTypeFromCellId
  export import getInfoAtCell = sharedElements.getInfoAtCell
  export import getMatterTypeAtCell = sharedElements.getMatterTypeAtCell
  export import isTypeAtCell = sharedElements.isTypeAtCell
  export import isFreeFallingAtCell = sharedElements.isFreeFallingAtCell
  export import getVelocityAtCell = sharedElements.getVelocityAtCell
  export import getDataFieldAtCell = sharedElements.getDataFieldAtCell


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
  export function getNameByType(elementType: number): string;
  export function findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSize: number): { x: number; y: number; } | null;
  export function createAtCellWhenIdle(cellX: number, cellY: number, elementType: ElementType, options?: ElementCreateOptions): void;
  export function replaceAtCellWhenIdle(cellX: number, cellY: number, elementType: ElementType, options?: ElementCreateOptions): void;
  export function removeAtCellWhenIdle(cellX: number, cellY: number, options?: ElementRemovalOptions): void;
  export function teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void;
  export function setVelocityAtCellWhenIdle(cellX: number, cellY: number, velocity: { x: number; y: number; }): void;
  export function addParticleVelocityAtCellWhenIdle(cellX: number, cellY: number, velocity: { x: number; y: number; }, maxSpeed?: number): void;
  export function convertToParticleAtCellWhenIdle(cellX: number, cellY: number, velocity: { x: number; y: number; }): void;
  export function convertFromParticleAtCellWhenIdle(cellX: number, cellY: number): void;
  export function setDataFieldAtCellWhenIdle(cellX: number, cellY: number, fieldNumber: 1 | 2 | 3 | 4, value: number): void;
  export function refreshColorAtCellWhenIdle(cellX: number, cellY: number): void;
  export function setPhysicsAtCellWhenIdle(cellX: number, cellY: number, physicsState: number): void;
  export function setDurationAtCellWhenIdle(cellX: number, cellY: number, duration: number, options?: { updateMax?: boolean; }): void;

  export type ElementCreateOptions = unknown
  export type ElementRemovalOptions = unknown
  export type e = unknown
  export type r = unknown
}

