import { MemoryRouter } from 'react-router'
import { fireEvent, render, screen } from '@testing-library/react'

import { AuthContext } from '../../../src/auth/context/AuthContext'
import { Navbar } from '../../../src/ui/components/Navbar'

const mockedUseNavigate = jest.fn()

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test in Navbar', () => {
    const contextValue = {
        logged: true,
        user: { id: 123, name: 'Angie Arias' },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('Should display the name of the user', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Angie Arias')).toBeTruthy()
    })

    test('Should call logout and navigate when click on button', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')

        fireEvent.click(logoutBtn)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
    })
})