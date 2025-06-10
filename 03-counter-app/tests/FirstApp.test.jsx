import { FirstApp } from '../src/FirstApp'
import { render } from '@testing-library/react'

describe('Test in component FirstApp', () => {
    // test('Should make macth with the snapshot', () => {
    //     const title = 'Angie'
    //     const age = 25
    //     const hobbie = 'Coding'
    //     const { container } = render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)
        
    //     expect(container).toMatchSnapshot()
    // })

    // test('Should display the title as h1', () => {
    //     const title = 'Angie'
    //     const age = 25
    //     const hobbie = 'Coding'
    //     const { container, getByText } = render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)

    //     expect(getByText(title)).toBeTruthy()

    //     const h1 = container.querySelector('h1')

    //     expect(h1.innerHTML).toContain(title)
    // })

    test('Should display the title by ID', () => {
        const title = 'Angie'
        const age = 25
        const hobbie = 'Coding'
        const { container, getByText, getByTestId } = render(<FirstApp title={ title } age={ age } hobbie={ hobbie }/>)

        expect(getByText(title)).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('Should display the subtitle sent by props', () => {
        const title = 'Angie'
        const subtitle = 'Hello!'
        const age = 25
        const hobbie = 'Coding'
        const { getByText, getAllByText } = render(<FirstApp title={ title } subtitle={ subtitle } age={ age } hobbie={ hobbie }/>)

        // Se prueba solo un elemento
        // expect(getByText(subtitle)).toBeTruthy()

        // Se prueba todos los elementos
        expect(getAllByText(subtitle).length).toBe(2)
    })
})