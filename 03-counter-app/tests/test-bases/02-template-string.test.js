import { getGreeting } from '../../src/test-bases/02-template-strings.jsx'

describe('Test in 02-template-string', () => {
    test('getGreeting should return Hello Angie Arias!', () => {
        const name = 'Angie'
        const lastName = 'Arias'
        const message = getGreeting(name, lastName)
        const expected = `Hello ${name} ${lastName}!`

        expect(message).toBe(expected)
    })
})