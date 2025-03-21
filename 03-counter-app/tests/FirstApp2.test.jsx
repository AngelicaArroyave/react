import { FirstApp } from '../src/FirstApp'
import { render, screen } from '@testing-library/react'

describe('Test in component FirstApp', () => {
    
    const title = 'Angie'
    const subtitle = 'Hello!'
    const age = 25
    const hobbie = 'Coding'

    test('Should make macth with the snapshot', () => {
        const { container } = render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)
        
        expect(container).toMatchSnapshot()
    })

    test('Should display the title', () => {
        render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)
        // screen.debug()
        expect(screen.getByText(title)).toBeTruthy()
    })

    test('Should display the title as h1', () => {
        render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)
        
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

    test('Should display the title by ID', () => {
        render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)

        expect(screen.getByText(hobbie)).toBeTruthy()
        expect(screen.getByTestId('test-hobbie').innerHTML).toContain(hobbie)
    })

    test('Should display the subtitle sent by props', () => {
        render(<FirstApp title={ title } subtitle={ subtitle } age={ age } hobbie={ hobbie }/>)

        expect(screen.getAllByText(subtitle).length).toBe(2)
    })
})