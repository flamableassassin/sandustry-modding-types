/**
 * Worker-thread `sandkit.api` namespaces.
 *
 * Prefer these declarations in `worker.js`. Do not assume main-thread methods
 * exist here. See {@link sandkit.api} for the main-thread public API.
 *
 * @module worker
 */
export * from "./api/main"
export * from "./api/shared"
export * from "./api/worker"
export * from "./api/elements"

// Shared files
export * from "../shared/api/collector"
export * from "../shared/api/fire"
export * from "../shared/api/hooks"
export * from "../shared/api/maps"
export * from "../shared/api/patterns"
export * from "../shared/api/player"
export * from "../shared/api/random"
export * from "../shared/api/structures"
export * from "../shared/api/terrains"
export * from "../shared/api/ui"
export * from "../shared/api/utils"
export * from "../shared/api/world"

export type { WorkerSandkitApi } from "./sandkit-api"
