import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../src/09-useContext/MainApp'
import { render, screen } from '@testing-library/react'

describe('Test in MainApp component', () => {
    test('Should display the HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('Home Page')).toBeTruthy()
    })

    test('Should display the LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('Login Page')).toBeTruthy()
    })
})