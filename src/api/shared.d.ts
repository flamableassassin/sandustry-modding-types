export namespace shared {
  export namespace buffers {
    export function get(key: string): SharedArray | undefined;
    export function require(key: string, config: { type: SharedArrayType; length: number; }): SharedArray;
    export function create(key: string, config: { type: SharedArrayType; length: number; }): SharedArray;
  }

  export type SharedArray = unknown
  export type SharedArrayType = unknown
}