import { GifExpertApp } from '../src/GifExpertApp'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Test in GifExpertApp component', () => {
    const value = 'One Piece'

    test('Should make match with snapshot', () => {
        const { container } = render(<GifExpertApp />)
        
        expect(container).toMatchSnapshot()
    })

    test('Should display the title', () => {
        render(<GifExpertApp />)

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBeTruthy()
    })

    test('Should be able to write in the input', () => {
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: value } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
    })

    test('Do not enter a repeated category', () => {
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        for(let i = 0; i < 2; i++) {
            fireEvent.input(input, { target: { value: value } })
            fireEvent.submit(form)
        }

        expect(screen.getAllByText(value).length).toBe(1)
    })
})