import React, { ComponentProps } from 'react';
export type SizeType = 'sm' | 'lg';
export type ColorType = 'default' | 'primary' | 'success' | 'danger';
export type SelectedBadgeProps = {
    id: string | number | undefined;
    value: string | number | undefined;
};
export interface BadgeProps extends Omit<ComponentProps<'span'>, 'ref' | 'color'> {
    label?: React.ReactNode;
    value?: string;
    size?: SizeType;
    color?: ColorType;
    icon?: React.ReactNode;
    isRemove?: boolean;
    onRemove?: (badge: SelectedBadgeProps) => void;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLLabelElement>>;
export default Badge;
