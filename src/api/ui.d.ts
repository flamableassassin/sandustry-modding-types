export namespace ui {
  export function update(componentId: ComponentId, options?: any): void;
  export function openPauseMenu(): void;
  export function showTooltip(data: TooltipData): void;
  export function toast(message: LocalizedText, options?: ToastOptions): void;
  export function alert(message: LocalizedText, title?: LocalizedText): Promise<void>;
  export function confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>;
  export function prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>;
  export function inject(componentId: string, component: ComponentType<Record<string, never>>): () => void;

  export namespace overlays {
    export function register(slot: string, overlayId: string, render: () => any): void;
    export function unregister(slot: string, overlayId: string): void;
    export function update(slot: string): void;
  }

  export namespace navigation {
    export function useFocusable<T extends HTMLElement = HTMLDivElement>(options: FocusOptions): {
      readonly ref: RefObject<T>;
      readonly focused: boolean;
      readonly focus: () => void;
    };
    export function useFocusScope(options: { readonly id: string; readonly active: boolean; readonly priority?: number; readonly defaultId?: string; readonly onBack?: (() => boolean | void); }): void;
    export function controllerFocusClass(focused: boolean): string;
  }

  export type ComponentId = unknown
  export type TooltipData = unknown
  export type LocalizedText = unknown
  export type ToastOptions = unknown
  export type ComponentType<t> = unknown
  export type RefObject<t> = unknown

  export interface FocusOptions {
    readonly id: string;
    readonly scope: string;
    readonly onActivate: (element?: HTMLElement) => void;
    readonly onFocus?: (() => void);
    readonly disabled?: boolean;
    readonly x?: number;
    readonly y?: number;
    readonly neighbors?: Partial<Record<'left' | 'right' | 'up' | 'down', string>>;
    readonly scrollIntoView?: boolean;
  }
}