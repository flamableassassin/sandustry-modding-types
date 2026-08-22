export namespace events {
  export function on<K extends string>(
    eventId: K,
    callback: (payload: EventPayload<K>) => void
  ): () => void;
  export function emit<K extends string>(
    eventId: K,
    payload: EventPayload<K>
  ): void;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export type EventPayload<K> = unknown;
}
