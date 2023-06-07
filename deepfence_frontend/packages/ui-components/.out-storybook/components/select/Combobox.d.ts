import React from 'react';
import { ComboboxOptionProps as HUIComboboxOptionProps, ComboboxProps as HUIComboboxProps } from '@headlessui/react';
import { ElementType } from 'react';
export type SizeType = 'xs' | 'sm' | 'md';
export type ColorType = 'default' | 'error';
type ComboboxProps<TValue, TNullable extends boolean | undefined, TMultiple extends boolean | undefined, TTag extends ElementType> = HUIComboboxProps<TValue, TNullable, TMultiple, TTag> & {
    children?: React.ReactNode;
    sizing?: SizeType;
    color?: ColorType;
    label?: string;
    placeholder?: string;
    onEndReached?: () => void;
    loading?: boolean;
    getDisplayValue?: (item: TValue) => string;
    onQueryChange: (query: string) => void;
};
declare let DEFAULT_COMBOBOX_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
export declare function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, true, TTag>): JSX.Element;
export declare function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, false, TTag>): JSX.Element;
export declare function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, false, TTag>): JSX.Element;
export declare function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, true, TTag>): JSX.Element;
interface ComboBoxOptionProps<TType> extends HUIComboboxOptionProps<'li', TType> {
    sizing?: SizeType;
}
export declare function ComboboxOption<TType>({ sizing, ...props }: ComboBoxOptionProps<TType>): JSX.Element;
export {};
