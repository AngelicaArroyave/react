import { HomePage } from '../../src/09-useContext/HomePage'
import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Test in HomePage component', () => {
    const user = {
        id: 1,
        name: 'Juan'
    }

    test('Should display the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect(preTag).toBeTruthy()
        expect(preTag.innerHTML).toBe('null')
    })

    test('Should display the component with the user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 2))
        expect(JSON.parse(preTag.innerHTML, null, 2).id).toBe(user.id)
        expect(JSON.parse(preTag.innerHTML, null, 2).name).toBe(user.name)
    })
})