import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('translation')

    const rebootPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={classNames(cls.title, {}, [className])}>
                {t('Произошла неизвестная ошибка')}
            </p>
            <button
                className={classNames(cls.btn, {}, [className])}
                onClick={rebootPage}
            >
                {t('Перезагрузить страницу')}
            </button>
        </div>
    );
}