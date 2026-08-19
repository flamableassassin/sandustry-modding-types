export namespace resources {
  export function collectFluxiteAtCell(cellX: number, cellY: number): void;
  export function updateEnergy(amount: number, options?: { deferUi?: boolean; }): void;
}
