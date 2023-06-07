/// <reference types="react" />
export type SizeType = 'sm' | 'md' | 'lg';
type CircleSpinnerProps = {
    size?: SizeType;
    className?: string;
};
export declare const CircleSpinner: ({ size, className }: CircleSpinnerProps) => JSX.Element;
export {};
