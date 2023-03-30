import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>


interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean
}

export const Input: React.FC<InputProps> = memo((props) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus()
        }
    }, [autofocus])

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder &&
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    className={cls.input}
                    onChange={onChangeHandler}
                    value={value}
                    type={type}
                    {...otherProps}
                />
            </div>
        </div>
    );
})