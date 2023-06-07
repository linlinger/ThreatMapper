/// <reference types="react" />
export interface CountIndicatorProps {
    count: number;
    color?: 'default' | 'primary' | 'danger' | 'success' | 'normal';
}
export declare const CountIndicator: ({ count, color }: CountIndicatorProps) => JSX.Element;
