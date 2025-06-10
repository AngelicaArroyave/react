import { MemoryRouter, Route, Routes } from 'react-router'
import { render, screen } from '@testing-library/react'

import { AuthContext } from '../../src/auth/context/AuthContext'
import { PublicRoute } from '../../src/router/PublicRoute'

describe('Test in PublicRoute', () => {
    test('Should display the children if the user is not logged', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Public Route')).toBeTruthy()
    })

    test('Should navigate if the user is logged', () => { 
        const contextValue = {
            logged: true,
            user: { id: 123, name: 'Angie Arias' }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={ <h1>Marvel page</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel page')).toBeTruthy()
    })
})