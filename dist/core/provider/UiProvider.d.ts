import { default as React } from 'react';
export interface UiConfig {
    breakpoints: Record<string, string>;
    colors: Record<string, string>;
    allowedDOMPropKeys: Set<string>;
}
export declare const UiContext: React.Context<UiConfig>;
export declare const UiProvider: React.FC<Partial<UiConfig> & {
    children: React.ReactNode;
}>;
