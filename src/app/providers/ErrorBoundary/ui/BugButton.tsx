import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Кнопка для теста ErrorBoundary

export const BugButton = () => {
    const {t} = useTranslation('translation')
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const errorNew = () => {
        setError(true)
    }

    return (
        <div>
            <button onClick={errorNew}>{t('Ошибка')}</button>
        </div>
    );
}