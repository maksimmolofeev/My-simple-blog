import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}></div>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                О сайте
            </AppLink>
        </div>
    );
}