import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';
export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
    label?: React.ReactNode;
};
export declare const Checkbox: React.FC<CheckboxProps>;
