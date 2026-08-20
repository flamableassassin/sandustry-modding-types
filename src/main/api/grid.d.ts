export namespace grid {
  export function forEachCellInRect(cellX: number, cellY: number, width: number, height: number, callback: (cellX: number, cellY: number) => void): void;
  export function forEachCellInCircle(centerCellX: number, centerCellY: number, radius: number, callback: (cellX: number, cellY: number) => void): void;
}