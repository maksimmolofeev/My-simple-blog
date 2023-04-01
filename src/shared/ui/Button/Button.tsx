import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l' ,
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean
    size?: SizeButton
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = SizeButton.M,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                {[cls.square]: square, [cls.disabled]: disabled},
                [className, cls[theme], cls[size]]
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}