import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation'
import { Sidebar } from './Sidebar'


describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Sidebar folding and unfolding', () => {
        renderWithTranslation(<Sidebar />)
        const btnToggle = screen.getByTestId('btn-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(btnToggle)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})