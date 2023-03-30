import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Введите username')}
                className={cls.loginInput}
                type="text"
            />
            <Input
                placeholder={t('Введите пароль')}
                className={cls.loginInput}
                type="text"
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
}