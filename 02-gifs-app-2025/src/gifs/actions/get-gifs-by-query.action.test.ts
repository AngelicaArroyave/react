import { beforeEach, describe, expect, test, vi } from 'vitest'
import AxiosMockAdapter from 'axios-mock-adapter'

import { getGifsByQuery } from './get-gifs-by-query.action'
import { giphyApi } from '../api/giphy.api'
import { giphySearchResponseMock } from './../../../test/mocks/giphy.response.data'

describe('Test in get-gifs-by-query Action', () => {
    let mock = new AxiosMockAdapter(giphyApi)

    // Forma 1
    beforeEach(() => {
        // mock.reset()
        mock = new AxiosMockAdapter(giphyApi)
    })

    // test('Should return a list of gifs', async () => {
    //     const gifs = await getGifsByQuery('goku')
    //     const [ gif1 ] = gifs
        
    //     expect(gifs.length).toBe(10)
    //     expect(gif1).toEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number)
    //     })
    // })

    test('Should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphySearchResponseMock)

        const gifs = await getGifsByQuery('goku')
        
        expect(gifs.length).toBe(10)

        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string')
            expect(typeof gif.title).toBe('string')
            expect(typeof gif.url).toBe('string')
            expect(typeof gif.width).toBe('number')
            expect(typeof gif.height).toBe('number')
        })
    })

    test('Should return an empty list of gifs if query is empty', async () => {
        // Form 2
        mock.restore()

        const gifs = await getGifsByQuery('')
        
        expect(gifs.length).toBe(0)
    })

    test('Should handle error when the API returns an error', async () => {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
        
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request'
            }
        })

        const gifs = await getGifsByQuery('goku')
        
        expect(gifs.length).toBe(0)
        expect(consoleErrorSpy).toHaveBeenCalled()
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
        expect(consoleErrorSpy).toBeCalledWith(expect.anything())
    })
})