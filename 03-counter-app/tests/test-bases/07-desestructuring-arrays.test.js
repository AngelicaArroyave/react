import { returnArray } from '../../src/test-bases/07-desestructuring-arrays'

describe('Test in 07-desestructuring-arrays', () => {
    test('returnArray should return a letters and a number', () => {
        const [ letters, numbers ] = returnArray()

        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect(letters).toEqual(expect.any(String))
        expect(numbers).toEqual(expect.any(Number))
        
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
    })
})