import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText
}

export const Text: React.FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme = ThemeText.PRIMARY
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}