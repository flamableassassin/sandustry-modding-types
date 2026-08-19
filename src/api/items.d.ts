export namespace items {
  export function register(definition: any): void;
  export function updateDefinition(itemId: string, partial: Record<string, any>): void;
  export function getDefinitionById(itemId: string): any;
  export function createFromId(itemId: string): ModItem;
  export function getActive(): any;
  export function isActiveById(itemId: string | number, itemType?: ItemType): boolean;

  export type ModItem = unknown
  export type ItemType = unknown
}