export interface User {
    id: number
    name: string
    location: string
    role: string
}

export const getUserAction = async (id: number) => {
    console.log('Call function')
    
    await new Promise(res => setTimeout(res, 2000))

    console.log('Resolve function')

    return {
        id,
        name: 'Angie',
        location: 'Kyoto, Japan',
        role: 'Software Development'
    }
}