import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import { AppRouter } from '../../src/router/AppRouter'
import { AuthContext } from '../../src/auth/context/AuthContext'

describe('Test in AppRouter', () => {
    test('Should display login page if the user is not logged', () => {
        const contextValue = {
            logged: false
        }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)
    })

    test('Should display marvel page if the user is logged', () => { 
        const contextValue = {
            logged: true,
            user: { id: 123, name: 'Angie Arias' }
        }
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    })
})