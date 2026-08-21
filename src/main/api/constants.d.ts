/**
 * Physics skip modes used with element skip-physics fields.
 * Confirmed against Sandustry 0.5.2 (`sandkit.api.constants.physics`).
 */
export namespace constants {
  export const physics: Readonly<{
    /** Run physics every tick. */
    normal: 0;
    /** Skip some physics updates. */
    skip: 1;
    /** Skip more aggressively than `skip`. */
    aggressiveSkip: 2;
  }>;
}
