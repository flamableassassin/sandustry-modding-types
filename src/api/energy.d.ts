export namespace energy {
  export function registerType(structureId: string, type: 'conductor' | 'storage', options?: any): void;
  export function addAtCell(cellX: number, cellY: number, amount: number, options?: any): number;
  export function consume(amount: number, options?: {
    allOrNothing?: boolean;
  }): number;
  export function consumeExcludingNetworkAtCell(cellX: number, cellY: number, amount: number): number;
  export function getNetworkAtCell(cellX: number, cellY: number): {
    x: number;
    y: number;
    type: string;
  }[];
  export function getNetworkFreeCapacityAtCell(cellX: number, cellY: number): number;
}