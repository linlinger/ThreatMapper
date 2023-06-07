import React from 'react';
type BreadcrumbLinkType = {
    children: React.ReactNode;
    asChild?: boolean;
    icon?: React.ReactNode;
    isLast?: boolean;
    isLink?: boolean;
    className?: string;
};
type BreadCrumbProps = {
    children: React.ReactNode | React.ReactNode[];
};
export declare const BreadcrumbLink: React.ForwardRefExoticComponent<BreadcrumbLinkType & React.RefAttributes<HTMLButtonElement>>;
export declare const Breadcrumb: ({ children }: BreadCrumbProps) => JSX.Element;
export {};
