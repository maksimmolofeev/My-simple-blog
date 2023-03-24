import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;
    const {t, i18n} = useTranslation('translation')
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = () => {
        setIsAuthModal(prev => !prev)
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {/* eslint-disable-next-line max-len */}
                    {t('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam natus consequatur rem, aliquid fugit cumque labore praesentium. Numquam accusantium quidem cum obcaecati deleniti modi aliquam debitis fugiat. Nam, excepturi error.')}
                </Modal>

            </div>
        </div>
    );
}