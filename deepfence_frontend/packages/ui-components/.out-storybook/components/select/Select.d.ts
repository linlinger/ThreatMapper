import { SelectItemProps } from 'ariakit/select';
import React from 'react';
export type SizeType = 'xs' | 'sm' | 'md';
export type ColorType = 'default' | 'error' | 'success';
type Value = string | string[];
type MutableValue<T extends Value = Value> = T extends string ? string : T;
export interface SelectProps<T extends Value = Value> {
    defaultValue?: T;
    label?: React.ReactNode;
    children: React.ReactNode;
    name?: string;
    value?: MutableValue<T>;
    onChange?: (value: MutableValue<T>) => void;
    sizing?: SizeType;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    color?: ColorType;
    helperText?: string;
    placeholder?: string;
    className?: string;
    prefixComponent?: React.ReactNode;
    noPortal?: boolean;
}
type IconProps = {
    icon: React.ReactNode;
    name?: string;
    color?: ColorType;
    sizing?: SizeType;
};
export declare const LeftIcon: ({ icon, color, sizing, name, }: IconProps) => JSX.Element;
export declare const classes: {
    color: {
        default: string;
        error: string;
        success: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
    };
};
export declare function Select<T extends Value>({ defaultValue, label, children, name, value, onChange, sizing, color, placeholder, startIcon, className, prefixComponent, noPortal, }: SelectProps<T>): JSX.Element;
export declare const SelectItem: (props: SelectItemProps<'div'>) => JSX.Element;
export {};
