import { Vector2 } from "../shared-types/player";

export namespace effects {
  export function createDistortionWaveAtWorld(worldX: number, worldY: number, options?: {
    style?: 'implode' | 'explode';
    duration?: number;
    maxRadius?: number;
    intensity?: number;
    color?: [number, number, number, number];
  }): void;

  export function createEffectAtWorld(effectId: "heatWave", worldX: number, worldY: number, options?: {
    duration?: number,
    maxRadius?: number,
    intensity?: number,
  }): void;

  export function createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: { width?: number; brightness?: number; color?: number; glow?: boolean; }): any;

  export function createLightAtWorld(worldX: number, worldY: number, options?: {
    brightness?: number,
    duration?: number,
    durationMs?: number,
    size?: number,
    color?: [number, number, number, number],
    decay: number,
    unclamped?: boolean,
    skipDedup?: boolean,
    useLightZones?: boolean,
    noopIfFull?: boolean,
    priority?: number,
    dedupKey: string,
  }): { index: number | null; };

  export function createParticlesAtWorld(worldX: number, worldY: number, options?: {
    count?: number,
    velocity?: Vector2,
    minSpeed?: number,
    maxSpeed?: number,
    /** @description Hex code. No alpha. */
    color?: number,
    minSize?: number,
    maxSize?: number,
    minLifetime?: number,
    maxLifetime?: number,
    background?: boolean,
    imageName?: string,
    fadeOutOnly?: boolean,
    fadeStart?: number,
    fadeEnd?: number,
    damp?: number,
  }): void;

  export function removeLightById(lightId: number): void;
}