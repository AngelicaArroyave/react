import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import { AuthContext } from '../../src/auth/'
import { PrivateRoute } from '../../src/router/PrivateRoute'

describe('Test in PrivateRoute', () => {
    test('Should display the children if the user is logged', () => {
        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: { id: 123, name: 'Angie Arias' }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Route')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })
})