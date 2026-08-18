import { JsonObjectV1, JsonValueV1 } from "../shared-types/jsonvalue";

export declare namespace gameConfig {
  export function get(key: string): JsonValueV1 | undefined;
  export function getAll(): JsonObjectV1;
}