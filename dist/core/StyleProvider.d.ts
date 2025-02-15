import { default as React } from 'react';
export interface StyleConfig {
    breakpoints: Record<string, string>;
}
export declare const StyleProvider: React.FC<Partial<StyleConfig> & {
    children: React.ReactNode;
}>;
export declare const useStyle: () => StyleConfig;
