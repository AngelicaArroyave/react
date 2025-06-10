import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Test in useForm', () => {
    const initialForm = {
        name: 'John',
        email: 'john@gmail.com',
    }

    test('Should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('Should change the name in the form', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current
        const newValue = 'John Doe'

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
    })

    test('Should reset the form', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange, onResetForm } = result.current

        act(() => {
            onInputChange({ target: { name: 'name', value: 'Juan' } })
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })
})