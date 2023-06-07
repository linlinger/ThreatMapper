import React from 'react';
import { ListboxOptionProps as HUIListboxOptionProps, ListboxProps as HUIListboxProps } from '@headlessui/react';
export type SizeType = 'sm' | 'md' | 'lg';
export type ColorType = 'default' | 'error' | 'success';
interface ListboxProps<TType, TActualType> extends HUIListboxProps<React.ExoticComponent<{
    children?: React.ReactNode;
}>, TType, TActualType> {
    sizing?: SizeType;
    color?: ColorType;
    children?: React.ReactNode;
    label?: string;
    placeholder?: string;
    getDisplayValue?: (value?: TType) => string;
    required?: boolean;
    id?: string;
}
export declare function Listbox<TType, TActualType>({ sizing, color, children, value, label, placeholder, getDisplayValue, required, id, ...props }: ListboxProps<TType, TActualType>): JSX.Element;
interface ListBoxOptionProps<TType> extends HUIListboxOptionProps<'li', TType> {
    sizing?: SizeType;
}
export declare function ListboxOption<TType>({ sizing, ...props }: ListBoxOptionProps<TType>): JSX.Element;
export {};
