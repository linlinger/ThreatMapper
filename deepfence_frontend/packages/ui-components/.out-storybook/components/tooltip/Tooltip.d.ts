import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export interface TooltipProps extends Pick<TooltipPrimitive.TooltipProps, 'defaultOpen' | 'open' | 'onOpenChange'> {
    placement?: 'top' | 'right' | 'bottom' | 'left';
    children: React.ReactNode;
    triggerAsChild?: boolean;
    content: string | React.ReactNode;
    delayDuration?: number;
}
export declare const Tooltip: {
    (props: TooltipProps): JSX.Element;
    displayName: string;
};
