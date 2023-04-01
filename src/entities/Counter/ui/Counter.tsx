import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)
    const {t, i18n} = useTranslation('translation')

    const onIncrement = () => {
        dispatch(counterActions.increment())
    }

    const onDecrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid='title-value'>{value}</h1>
            <Button data-testid='btn-increment' onClick={onIncrement}>{t('Прибавить')}</Button>
            <Button data-testid='btn-decrement' onClick={onDecrement}>{t('Отнять')}</Button>
        </div>
    );
}
