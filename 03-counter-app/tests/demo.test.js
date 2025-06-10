describe('Demo component Test', () => {
    test('First test', () => {
        // Inicializacion
        const message = 'Hello World'
    
        // Estimulo
        const messageExpected = message.trim()
    
        // Observar el comportamiento... esperado
        expect(messageExpected).toBe(message)
    })
})