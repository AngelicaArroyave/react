import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from '../../src/hooks/useCounter'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Test in MultipleCustomHooks component', () => {
    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Should display the default component', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Pokemon information'))

        const nexButton = screen.getByRole('button', { name: 'Next' })

        // expect(nexButton.disabled).toBeTruthy()
    })

    test('Should show a pokemon', () => {
        useFetch.mockReturnValue({
            data: {
                id: 2,
                name: 'ivysaur',
                sprites: {
                    back_default: '',
                    back_shiny: '',
                    front_default: '',
                    front_shiny: ''
                }
            },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        expect(screen.getByText('#1 - ivysaur')).toBeTruthy()
        // expect(nexButton.disabled).toBeFalsy()
    })

    test('Should call the increment function', () => {
        useFetch.mockReturnValue({
            data: {
                id: 2,
                name: 'ivysaur',
                sprites: {
                    back_default: '',
                    back_shiny: '',
                    front_default: '',
                    front_shiny: ''
                }
            },
            isLoading: false,
            hasError: null
        })
        
        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button', { name: 'Next' })
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled()
    })
})