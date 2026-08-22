import { CellCoordinates } from "../../common-types/player";

export namespace resources {
  export function collectFluxiteAtCell(...args: CellCoordinates): void;
  export function updateEnergy(
    amount: number,
    options?: { deferUi?: boolean }
  ): void;
}
