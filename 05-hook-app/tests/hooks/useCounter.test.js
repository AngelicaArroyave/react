import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Test in useCounter', () => {
    test('Should return default values', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current

        expect(counter).toBe(10)
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('Should generate the counter with 100 as initial value', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current

        expect(counter).toBe(100)
    })

    test('Should increase the counter', () => {
        const { result } = renderHook(() => useCounter())
        const { increment } = result.current

        act(() => increment())
        expect(result.current.counter).toBe(11)

        act(() => {
            increment()
            increment(2)
        })
        expect(result.current.counter).toBe(14)
    })

    test('Should decrease the counter', () => {
        const { result } = renderHook(() => useCounter())
        const { decrement } = result.current

        act(() => {
            decrement()
            decrement(2)
        })
        expect(result.current.counter).toBe(7)
    })

    test('Should reset the counter', () => {
        const { result } = renderHook(() => useCounter())
        const { increment, decrement, reset } = result.current

        act(() => {
            increment(2)
            decrement()
            reset()
        })
        expect(result.current.counter).toBe(10)
    })
})