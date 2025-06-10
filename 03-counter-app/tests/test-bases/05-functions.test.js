import { getUser, getUserActive } from '../../src/test-bases/05-functions'

describe('Test in 05-functions', () => {
    test('getUser should return an object with uid, name and age', () => {
        const testUser = {
            uid: '123',
            name: 'John Doe',
            age: 30
        }
        const user = getUser()

        expect(testUser).toEqual(user)
    })

    test('getUserActive should return an object with parameters', () => {
        const name = 'John Doe'
        const testUser = {
            uid: '123',
            username: name
        }
        const user = getUserActive(name)

        expect(testUser).toEqual(user)
    })
})