export namespace maps {
  export function getActive(): Readonly<ActiveMapV1> | null;
  export function getAvailable(): readonly Readonly<AvailableMapV1>[];
  export function start(mapId: string): boolean;
  export type ActiveMapV1 = unknown
  export type AvailableMapV1 = unknown
}