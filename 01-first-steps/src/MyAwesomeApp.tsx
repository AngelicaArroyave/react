import type { CSSProperties } from 'react'

const firstName = 'Angie'
const lastName = 'Arias'

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear']

const isActive = true

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

const myStyles: CSSProperties = {
                backgroundColor: 'purple',
                color: 'white',
                borderRadius: isActive ? 8 : 15,
                padding: 10,
                marginTop: 20
            }

export const MyAwesomeApp = () => {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Active' : 'No active'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    )
}