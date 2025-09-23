import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'

import { useCounter } from './useCounter'

describe('Test in useCounter hook', () => {
    // Forma 2
    // let result

    // beforeEach(() => {
    //     const { result: hookValue } = renderHook(() => useCounter())
    //     result = hookValue
    // })

    test('Should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter())

        expect(result.current.counter).toBe(10)
    })

    test('Should initialize with default value of 15', () => {
        const initialValue = 15
        const { result } = renderHook(() => useCounter(initialValue))

        expect(result.current.counter).toBe(initialValue)
    })

    test('Should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => result.current.handleAdd())
        act(() => result.current.handleAdd())

        expect(result.current.counter).toBe(12)
    })

    test('Should decrement counter when handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => result.current.handleSubtract())

        expect(result.current.counter).toBe(9)
    })

    test('Should reset to initialValue counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => result.current.handleAdd())
        act(() => result.current.handleAdd())
        act(() => result.current.handleSubtract())
        act(() => result.current.handleReset())

        expect(result.current.counter).toBe(10)
    })
})