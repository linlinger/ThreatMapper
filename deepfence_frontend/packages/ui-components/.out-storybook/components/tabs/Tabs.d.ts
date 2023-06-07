import * as TabsPrimitive from '@radix-ui/react-tabs';
import { VariantProps } from 'cva';
import React from 'react';
import { ObjectWithNonNullableValues } from '../../types/utils';
export type SizeType = 'md';
export type TabVariantProps = ObjectWithNonNullableValues<VariantProps<typeof tabListCva>>;
export type TabProps = TabsPrimitive.TabsProps & {
    size?: SizeType;
    tabs: {
        label: string;
        value: string;
        id?: string | number;
        icon?: React.ReactNode;
        disabled?: boolean;
    }[];
    value: string;
    children: React.ReactNode;
    variant?: keyof TabVariantProps;
};
declare const tabListCva: (props?: ({
    underline?: boolean | null | undefined;
} & import("cva/dist/types").ClassProp) | undefined) => string;
declare const Tabs: (props: TabProps) => JSX.Element;
export default Tabs;
