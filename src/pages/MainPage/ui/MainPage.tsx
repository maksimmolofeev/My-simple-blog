import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage: FC = () => {
    const { t, i18n } = useTranslation('main');
    const [value, setValue] = useState('')
    
    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <div>
            {t('Главная страница')}
        </div>
    )
}

export default MainPage;