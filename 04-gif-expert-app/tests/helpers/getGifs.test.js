import { getGifs } from '../../src/helpers/getGifs'

describe('Test in getGif helper', () => {
    test('Should return an array of gifs', async () => {
        const gifs = await getGifs('One piece')
        
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})