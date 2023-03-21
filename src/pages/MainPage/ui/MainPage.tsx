import { BugButton } from "app/providers/ErrorBoundary";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
    const { t, i18n } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    )
}

export default MainPage;