import {render, screen} from '@testing-library/react'
import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';


describe('Button', () => {
    test('Button render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Button clear theme', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        screen.debug()
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})