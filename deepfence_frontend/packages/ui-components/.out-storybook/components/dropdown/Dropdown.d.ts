import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
export interface DropdownProps extends DropdownPrimitive.DropdownMenuProps {
    children: React.ReactNode;
    content: React.ReactNode;
    triggerAsChild?: boolean;
    align?: DropdownPrimitive.MenuContentProps['align'];
}
export declare const DropdownSubMenu: React.FC<DropdownPrimitive.DropdownMenuSubProps & {
    children: React.ReactNode;
    content: React.ReactNode;
    triggerAsChild?: boolean;
    disabled?: boolean;
}>;
export declare const Dropdown: React.FC<DropdownProps & {
    loop?: boolean;
}>;
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement> & {
    selected?: boolean;
    icon?: React.ReactNode;
}>;
export declare const DropdownSeparator: React.ForwardRefExoticComponent<DropdownPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
