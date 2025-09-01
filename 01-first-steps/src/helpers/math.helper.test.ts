import { describe, expect, test } from 'vitest'

import { add, divider, multiply, subtract } from './math.helper'

describe('Test in Add method', () => {
    test('Should add two positives numbers', () => {
        // * 1. Arrange
        const a = 1
        const b = 3
    
        // * 2. Act
        const result = add(a, b)
        
        // * 3. Assert
        expect(result).toBe(a + b)
    })

    test('Should add one positive and one negative numbers', () => {
        const a = -5
        const b = 3
    
        const result = add(a, b)
        
        expect(result).toBe(a + b)
    })

    test('Should add two negatives numbers', () => {
        const a = -5
        const b = -3
    
        const result = add(a, b)
        
        expect(result).toBe(a + b)
    })
})

describe('Test in Subtract method', () => {
    test('Should subtract two positives numbers', () => {
        const a = 1
        const b = 3
    
        const result = subtract(a, b)
        
        expect(result).toBe(a - b)
    })

    test('Should subtract two negatives numbers', () => {
        const a = -2
        const b = -7
    
        const result = subtract(a, b)
        
        expect(result).toBe(a - b)
    })

    test('Should subtract one positive and one negative numbers', () => {
        const a = 4
        const b = -7
    
        const result = subtract(a, b)
        
        expect(result).toBe(a - b)
    })
})

describe('Test in Multiply method', () => {
    test('Should multiply two positives numbers', () => {
        const a = 1
        const b = 3
    
        const result = multiply(a, b)
        
        expect(result).toBe(a * b)
    })

    test('Should subtract two negatives numbers', () => {
        const a = -2
        const b = -7
    
        const result = multiply(a, b)
        
        expect(result).toBe(a * b)
    })

    test('Should subtract one positive and one negative numbers', () => {
        const a = 4
        const b = -7
    
        const result = multiply(a, b)
        
        expect(result).toBe(a * b)
    })

    test('Should subtract one positive number', () => {
        const a = 4
        const b = 0
    
        const result = multiply(a, b)
        
        expect(result).toBe(a * b)
    })
})

describe('Test in Divide method', () => {
    test('Should multiply two positives numbers', () => {
        const a = 2
        const b = 6
    
        const result = divider(a, b)
        
        expect(result).toBe(a / b)
    })
})