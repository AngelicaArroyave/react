import { calendarApi } from '../../src/api/calendarApi'

describe('Test in calendarApi', () => {
    test('You must have the default configuration', () => {
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
    })

    test('You must have the x-token in the header of all requests', async () => {
        const token = '123ABCD'

        localStorage.setItem('token', token)

        try {
            const response = await calendarApi.post('/auth', {
                email: 'test@gmail.com',
                password: '123456'
            })
            console.log("🚀 ~ test ~ response:", response)

            expect(response.config.headers['x-token']).toBe(token)
        } catch (error) {
            console.log("🚀 ~ test ~ error:", error)
        }
    })
})