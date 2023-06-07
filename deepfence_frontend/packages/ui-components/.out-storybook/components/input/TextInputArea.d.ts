import React from 'react';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';
import { ObjectWithNonNullableValues } from '../../types/utils';
export interface TextInputAreaProps extends Omit<ComponentProps<'textarea'>, 'ref' | 'color' | 'className'>, ObjectWithNonNullableValues<Omit<VariantProps<typeof inputElementClassnames>, 'isFullWidth'>> {
    label?: string;
    helperText?: string;
}
declare const inputElementClassnames: (props?: ({
    color?: "default" | "success" | "error" | null | undefined;
    sizing?: "sm" | "lg" | "md" | null | undefined;
    isFullWidth?: boolean | null | undefined;
} & import("cva/dist/types").ClassProp) | undefined) => string;
export declare const TextInputArea: React.ForwardRefExoticComponent<TextInputAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextInputArea;
