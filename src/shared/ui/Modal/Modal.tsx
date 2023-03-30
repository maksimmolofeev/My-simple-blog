import { useTheme } from 'app/providers/ThemeProvider';
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const ANIMATION_DELAY = 300
    const [isClosing, setIsClose] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    const closeHandler = useCallback(() => {
        setIsClose(true)
        if(onClose) {
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClose(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.code === "Escape") {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        window.addEventListener('keydown', (e) => onKeyDown(e))

        return (
            clearTimeout(timerRef.current),
            window.removeEventListener('keydown', onKeyDown)
        )
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler} >
                    <div 
                        className={cls.content}
                        onClick={(e) => onContentHandler(e)}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}