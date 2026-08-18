export namespace building {
  export function check(cooldown: Cooldown, overrideTime?: number): boolean;
  export function isReady(cooldown: Cooldown, overrideTime?: number): boolean;
}

// TODO
type Cooldown = unknown