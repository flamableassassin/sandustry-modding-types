export namespace upgrades {
  export function registerCategory(definition: UpgradeCategoryDefinition): void;
  export function register(definition: UpgradeDefinition): void;
  export function updateDefinition(itemId: string, upgradeId: string, partial: Record<string, any>): void;
  export function getLevelById(itemId: string, upgradeId: string): number;
  export function getAvailableLevelById(itemId: string, upgradeId: string): number;

  export type UpgradeCategoryDefinition = unknown
  export type UpgradeDefinition = unknown
}