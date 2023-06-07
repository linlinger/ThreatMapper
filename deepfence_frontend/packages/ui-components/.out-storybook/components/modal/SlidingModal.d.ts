import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, { FC } from 'react';
interface FocusableElement {
    focus(options?: FocusOptions): void;
}
type ChildrenType = {
    children: React.ReactNode;
};
export interface ModalProps extends DialogPrimitive.DialogProps {
    direction?: 'left' | 'right';
    width?: string;
    elementToFocusOnCloseRef?: React.RefObject<FocusableElement> | null;
}
export declare const SlidingModalCloseButton: () => JSX.Element;
export declare const SlidingModalHeader: FC<{
    children?: React.ReactNode;
}>;
export declare const SlidingModalContent: FC<{
    children?: React.ReactNode;
}>;
export declare const SlidingModalFooter: FC<ChildrenType>;
export declare const SlidingModal: FC<ModalProps>;
export default SlidingModal;
