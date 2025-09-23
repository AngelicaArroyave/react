import { act, renderHook } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { useGifs } from './useGifs'
import * as gifActions from '../actions/get-gifs-by-query.action'

describe('Test in useGifs Hook', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs())

        expect(result.current.searchedGifs.length).toBe(0)
        expect(result.current.previousTerms.length).toBe(0)
        expect(result.current.previousTerms).toBeDefined()
        expect(result.current.previousTerms).toStrictEqual([])
        expect(result.current.searchedGifs).toBeDefined()
        expect(result.current.searchedGifs).toStrictEqual([])
        expect(result.current.handleSearch).toBeDefined()
        expect(result.current.handleTermClicked).toBeDefined()
    })

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => await result.current.handleSearch('Anya'))

        expect(result.current.searchedGifs.length).toBe(10)
    })

    test('should return a list of gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => await result.current.handleTermClicked('Anya'))

        expect(result.current.searchedGifs.length).toBe(10)
    })

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => await result.current.handleTermClicked('Anya'))

        expect(result.current.searchedGifs.length).toBe(10)

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('This is my custom error'))

        await act(async () => await result.current.handleTermClicked('Anya'))

        expect(result.current.searchedGifs.length).toBe(10)
    })

    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs())

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockResolvedValue([])
        
        await act(async () => await result.current.handleSearch('goku'))
        await act(async () => await result.current.handleSearch('goku2'))
        await act(async () => await result.current.handleSearch('goku3'))
        await act(async () => await result.current.handleSearch('goku4'))
        await act(async () => await result.current.handleSearch('goku5'))
        await act(async () => await result.current.handleSearch('goku6'))
        await act(async () => await result.current.handleSearch('goku7'))
        await act(async () => await result.current.handleSearch('goku8'))
        await act(async () => await result.current.handleSearch('goku9'))

        expect(result.current.previousTerms.length).toBe(8)
        expect(result.current.previousTerms).toStrictEqual(['goku9', 'goku8', 'goku7', 'goku6', 'goku5', 'goku4', 'goku3', 'goku2'])
    })
})