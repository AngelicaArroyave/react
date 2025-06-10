import { MemoryRouter } from 'react-router'
import { fireEvent, render, screen } from '@testing-library/react'

import { SearchPage } from '../../../src/heroes/pages/SearchPage'

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test in SearchPage', () => {
    beforeEach(() => jest.clearAllMocks())
    
    test('Should display correct data with default values', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('Should display Batman and the input with queryString as value', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')

        expect(input).toBe('batman')

        const img = screen.getByRole('img')

        expect(img).toContain('/public/assets/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-info')
        
        expect(alert).toBeInTheDocument()
    })

    test('Should display error message when there is no results as batman123', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        
        expect(alert).toBeInTheDocument()
    })

    test('Should call navigate to the new page', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } })

        const form = screen.getByRole('form')
        
        fireEvent.submit(form)
        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')
    })
})