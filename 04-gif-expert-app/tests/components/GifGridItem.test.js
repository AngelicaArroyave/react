import { render, screen } from '@testing-library/react'
import { GifGridItem } from '../../src/components/GifGridItem'

describe('Test in GifGridItem component', () => {
    const title = 'Rick and Morty'
    const url = 'https://media.giphy.com/media/l0HlE0b7l3j3q/giphy.gif'

    test('Should make match with snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />)

        expect(container).toMatchSnapshot()
    })

    test('Should display the image with the URL and ALT indicated', () => {
        render(<GifGridItem title={title} url={url} />)
        
        const { src, alt } = screen.getByRole('img')

        // Forma 1
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        
        // Forma 2
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Should display the title in the component', () => {
        render(<GifGridItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy()
    })
})