export namespace collector {
  export function getValueFromCellId(cellId: number): number;
  export function getValueByType(elementType: number): number;
  export function isCellIdCollectable(cellId: number): boolean;
  export function isCellIdCollectableForSprite(cellId: number): boolean;
  export function notifyPickupAtCell(cellX: number, cellY: number): void;
}