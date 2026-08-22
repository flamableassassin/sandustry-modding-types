export namespace scene {
  export enum Scene {
    MainMenu = 1,
    Intro = 2,
    Deploy = 3,
    Game = 4
  }
  export function getActive(): Scene;
}
