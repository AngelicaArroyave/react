import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CustomHeader } from './CustomHeader'

describe('Test in CustomerHeader component', () => {
    const title = 'Test title'
    const description = 'Description from testing'

    test('Should render the title correctly', () => {
        render(<CustomHeader title={ title } />)

        // Forma 1
        const h1 = screen.getByTestId('title')
        
        expect(h1?.innerHTML).toContain(title)

        // Forma 2
        expect(screen.getByText(title)).toBeDefined()
    })
    
    test('Should render the description when provided', () => {
        render(<CustomHeader title={ title } description={ description } />)

        // Forma 1
        const p = screen.getByTestId('description')

        expect(p?.innerHTML).toContain(description)

        // Forma 2
        expect(screen.getByText(description)).toBeDefined()
        expect(screen.getByRole('paragraph')).toBeDefined()
        expect(screen.getByRole('paragraph').innerHTML).toBe(description)
    })

    test('Should not render description when not provided', () => {
        const { container } = render(<CustomHeader title={ title } />)
        const p = container.querySelectorAll('p')

        expect(p.length).toBe(0)

        // Forma 2
        const divElement = container.querySelector('.container-center')
        const pp = divElement?.querySelector('p')

        expect(pp).toBeUndefined()
    })
})