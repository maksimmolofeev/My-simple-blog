import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import componentRender from 'shared/lib/tests/componentRender'
import { Counter } from './Counter'


describe('Counter', () => {
    test('With only first param', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 }}
        })
        const value = screen.getByTestId('title-value')
        expect(value).toHaveTextContent('10')
    })

    test('Increment click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 }}
        })
        const value = screen.getByTestId('title-value')
        const btnIncrement = screen.getByTestId('btn-increment')
        fireEvent.click(btnIncrement)
        expect(value).toHaveTextContent('11')
    })

    test('Decrement click', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 }}
        })
        const value = screen.getByTestId('title-value')
        const btnDecrement = screen.getByTestId('btn-decrement')
        fireEvent.click(btnDecrement)
        expect(value).toHaveTextContent('9')
    })
})