import React from 'react';
type AvatarType = {
    alt?: string;
    src?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
};
export declare const Avatar: React.ForwardRefExoticComponent<AvatarType & React.RefAttributes<HTMLButtonElement>>;
export {};
