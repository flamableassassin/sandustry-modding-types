import type { Vector2 } from "../shared-types/player";

export namespace effects {
  export function createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): { index: number | null; };
  export function createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void;
  export function createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void;
  export function createEffectAtWorld(effectId: "heatWave", worldX: number, worldY: number, options?: EffectOptions): void;
  export function createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): any;
  export function removeLightById(lightId: number): void;

  export interface LaserEffectOptions {
    width?: number;
    brightness?: number;
    color?: number;
    glow?: boolean;
  }
  export interface EffectOptions {
    duration?: number,
    maxRadius?: number,
    intensity?: number,
  }
  export interface TemporaryLightOptions {
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
  }
  export interface ParticleEffectOptions {
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
  }

  export interface DistortionEffectOptions {
    style?: 'implode' | 'explode';
    duration?: number;
    maxRadius?: number;
    intensity?: number;
    color?: [number, number, number, number];
  }
}