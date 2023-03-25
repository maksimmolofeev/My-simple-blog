import { DeepPartial } from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react'
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../../types/CounterSchema';
import { getCounter } from './getCounter';


describe('getCounter', () => {
    test('Should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})