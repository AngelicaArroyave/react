import { LoginPage } from '../../src/09-useContext/LoginPage'
import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Test in loginPage component', () => {
    const setUserMock = jest.fn()

    test('Should display the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        
        expect(preTag).toBeTruthy()
        expect(preTag.innerHTML).toBe('null')
    })

    test('Should call the setUser by clicking in the button', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const btnElement = screen.getByRole('button')
        fireEvent.click(btnElement)

        expect(setUserMock).toHaveBeenCalledWith({ id: 1, name: 'John Dae', email: 'john.dae@gmail.com' })
    })
})