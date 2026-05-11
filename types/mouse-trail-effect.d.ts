declare module "mouse-trail-effect" {
  export interface MouseTrailEffectInstance {
    start: () => void;
    stop: () => void;
  }

  export interface MouseTrailEffectOptions {
    trailLength?: number;
    trailSize?: number;
    trailDuration?: number;
    colorFormat?: string;
    colorCount?: number;
    trailEffect?: string;
    trailShape?: string;
    customTrailClass?: string;
    zIndex?: number;
  }

  export default function createMouseTrailEffect(
    options?: MouseTrailEffectOptions
  ): MouseTrailEffectInstance;
}
