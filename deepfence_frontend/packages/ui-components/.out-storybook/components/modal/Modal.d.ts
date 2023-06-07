import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, { FC } from 'react';
interface FocusableElement {
    focus(options?: FocusOptions): void;
}
export interface ModalProps extends DialogPrimitive.DialogProps {
    width?: string;
    title?: string;
    footer?: React.ReactNode;
    elementToFocusOnCloseRef?: React.RefObject<FocusableElement>;
}
export declare const Modal: FC<ModalProps>;
export default Modal;
