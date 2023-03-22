import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const [t, i18n] = useTranslation('')
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            data-testid='sidebar'
            className={classNames(
                cls.Sidebar, {[cls.collapsed]: collapsed}, [className]
            )}
        >
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutePath.main}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutePath.about}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button
                data-testid='btn-toggle'
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square={true}
                size={SizeButton.L}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </div>
    );
}