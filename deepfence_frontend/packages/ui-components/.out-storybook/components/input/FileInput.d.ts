import React from 'react';
import { VariantProps } from 'cva';
import { ChangeEvent, ComponentProps } from 'react';
import { ObjectWithNonNullableValues } from '../../types/utils';
export type SizeType = 'sm' | 'md' | 'lg';
declare const inputCva: (props?: ({
    sizing?: "sm" | "lg" | "md" | null | undefined;
} & import("cva/dist/types").ClassProp) | undefined) => string;
export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'size'>, ObjectWithNonNullableValues<VariantProps<typeof inputCva>> {
    label?: string;
    helperText?: string;
    required?: boolean;
    accept?: string;
    hint?: string;
    onChoosen?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const FileInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export default FileInput;
