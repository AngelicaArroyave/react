import { getImage } from '../../src/test-bases/12-async-await'

describe('Test in 12-async-await', () => {
    test('getImage should return an URL of an image', async () => {
        const url = await getImage()
        
        expect(typeof url).toBe('string')
    })

    test('getImage should return a message error when not found the image', async () => {
        const response = await getImage()
        
        expect(response).toBe('Not found the image')
    })
})