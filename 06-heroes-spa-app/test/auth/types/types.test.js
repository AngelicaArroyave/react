import { types } from '../../../src/auth/types/types'

describe('Test in Types', () => {
    test('Should return the correct types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})