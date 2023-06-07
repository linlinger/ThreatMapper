import { VariantProps } from 'cva';
import React, { ComponentProps } from 'react';
import { ObjectWithNonNullableValues } from '../../types/utils';
export type SizeType = 'sm' | 'md' | 'lg';
export type ColorType = 'default' | 'error' | 'success';
declare const inputCva: (props?: ({
    color?: "default" | "success" | "error" | null | undefined;
    sizing?: "sm" | "lg" | "md" | null | undefined;
    withStartIcon?: boolean | null | undefined;
    withEndIcon?: boolean | null | undefined;
} & import("cva/dist/types").ClassProp) | undefined) => string;
declare const iconContextCva: (props?: ({
    color?: "default" | "success" | "error" | null | undefined;
    sizing?: "sm" | "lg" | "md" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("cva/dist/types").ClassProp) | undefined) => string;
interface IconProps extends ObjectWithNonNullableValues<VariantProps<typeof iconContextCva>> {
    icon: React.ReactNode;
    id?: string;
}
export declare const LeftIcon: ({ icon, id, color, sizing, disabled }: IconProps) => JSX.Element;
export declare const RightIcon: ({ icon, id, color, sizing, disabled }: IconProps) => JSX.Element;
export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className' | 'size'>, ObjectWithNonNullableValues<Omit<VariantProps<typeof inputCva>, 'withStartIcon' | 'withEndIcon'>> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: string;
    helperText?: string;
    className?: string;
    required?: boolean;
    hint?: string;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
