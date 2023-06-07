import React from 'react';
type StepProps = {
    indicator: React.ReactNode;
    title: string;
    children: React.ReactNode;
};
export declare const Step: ({ indicator, title, children }: StepProps) => JSX.Element;
type StepperProps = {
    children: React.ReactNode;
};
export declare const Stepper: ({ children }: StepperProps) => JSX.Element;
export {};
