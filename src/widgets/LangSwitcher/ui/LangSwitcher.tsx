import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({className, short}) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={toggle}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t(short ? 'Язык сокращенный' : 'Язык')}
        </Button>
    );
}