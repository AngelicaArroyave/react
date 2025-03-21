import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Test in component CounterApp', () => {

    const initialValue = 10

    test('Should make macth with the snapshot', () => {
        const { container } = render(<CounterApp value={ initialValue }/>)

        expect(container).toMatchSnapshot()
    })

    test('Should display the initial value in 100', () => {
        render(<CounterApp value={ 100 }/>)

        expect(screen.getByText(100)).toBeTruthy()
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    })

    test('Should increment the value by 2', () => {
        render(<CounterApp value={ initialValue }/>)

        fireEvent.click(screen.getByText('+2'))
        expect(screen.getByText(initialValue + 2)).toBeTruthy()
    })

    test('Should decrement the value by 1', () => {
        render(<CounterApp value={ initialValue }/>)

        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(initialValue - 1)).toBeTruthy()
    })

    test('Should rest the values to the initial value', () => {
        render(<CounterApp value={ initialValue }/>)

        fireEvent.click(screen.getByText('+2'))
        fireEvent.click(screen.getByText('+2'))
        fireEvent.click(screen.getByText('+2'))
        // Forma 1
        // fireEvent.click(screen.getByText('Reset'))
        // Forma 2
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText(initialValue)).toBeTruthy()
    })
})