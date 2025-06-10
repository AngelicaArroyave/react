import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Test in useFetchGifs hooks', () => {
    const value = 'One Piece'

    test('Should return to the initial state', () => {
        const { result } = renderHook(() => useFetchGifs(value))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Should return an array of images and isLoading set to false', async () => {
        const { result } = renderHook(() => useFetchGifs(value))
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})