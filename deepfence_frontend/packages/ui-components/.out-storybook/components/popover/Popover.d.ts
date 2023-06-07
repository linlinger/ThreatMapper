import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
interface FocusableElement {
    focus(options?: FocusOptions): void;
}
export interface PopoverProps extends PopoverPrimitive.PopoverProps {
    children: React.ReactNode;
    content: React.ReactNode;
    triggerAsChild?: boolean;
    align?: PopoverPrimitive.PopperContentProps['align'];
    elementToFocusOnCloseRef?: React.RefObject<FocusableElement> | null;
}
export declare const Popover: React.FC<PopoverProps>;
export {};
