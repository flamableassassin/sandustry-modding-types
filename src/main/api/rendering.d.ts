import type { Vector2 } from "../../common-types/player";

export namespace rendering {
  export function getDrawPositionAtCell(cellX: number, cellY: number): Vector2;
  export function getGridMetrics(): { cellSize: number; snapGridCellSize: number; };
  export function getOverlayViewportSize(): { width: number; height: number; };
  export function withOverlayContext<T>(callback: (context: CanvasRenderingContext2D) => T): T;
}