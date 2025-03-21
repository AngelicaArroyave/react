import { AddCategory } from '../../src/components/AddCategory'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Test in AddCategory component', () => {
    const inputValue = 'One Piece'

    test('Should be change the value of the text box', () => {
        render(<AddCategory onNewCategory={ () => { }} />)
        
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: inputValue } })
        expect(input.value).toBe(inputValue)
    })

    test('Should call onNewCategory if the input has a value', () => {
        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={ onNewCategory } />)
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('Should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={ onNewCategory } />)
        
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
})