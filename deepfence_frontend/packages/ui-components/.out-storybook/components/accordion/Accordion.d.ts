import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React from 'react';
export declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
export interface AccordionItemProps extends AccordionPrimitive.AccordionItemProps {
    children: React.ReactNode;
    className?: string;
}
export declare const AccordionItem: (props: AccordionItemProps) => JSX.Element;
export declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const AccordionContent: React.ForwardRefExoticComponent<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
