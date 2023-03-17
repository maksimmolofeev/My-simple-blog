import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import React from 'react';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
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
            <Button data-testid='btn-toggle' onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
}