import { ButtonVariant, ToasterPosition, ToastVariant } from "./common.model";

export interface DialogOptions {
    closeOnBackdropClick?: boolean;
    backdrop?: boolean;
    disableScroll?: boolean;
    delay?: number;
    afterClosed?: () => void;
}

export interface ToasterOptions {
    title: string;
    description: string;
    afterClosed?: () => void;
    onActionClick?: () => void;
    position?: ToasterPosition;
    timeout?: number;
    variant?: ToastVariant;
    actionLabel?: string;
    actionVariant?: ButtonVariant;
}