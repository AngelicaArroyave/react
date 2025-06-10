import { GifGrid } from '../../src/components/GifGrid'
import { render, screen } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in GifGrid component', () => {
    const category = 'One Piece'

    test('Should initially display the loading message', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={ category } />)
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
    })

    test('Should display items when loading images from the API', () => {
        const gifs = [
            {
                id: '1',
                title: 'Rick and Morty',
                url: 'https://media.giphy.com/media/l0HlE0b7l3j3q/giphy.gif'
            },
            {
                id: '2',
                title: 'One Piece',
                url: 'https://media.giphy.com/media/l0HlE0b7l3j3q/giphy.gif'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />)

        expect(screen.getAllByRole('img').length).toBe(2)
    })
})