import { describe, expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';

import { HomePage } from './HomePage';
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero';
import { beforeEach } from 'node:test';
import { FavoriteHeroProvider } from '@/heroes/context/FavoriteHeroContext';

vi.mock('@/heroes/hooks/usePaginatedHero')

const mockUsePaginatedHero = vi.mocked(usePaginatedHero)

mockUsePaginatedHero.mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
} as unknown as ReturnType<typeof usePaginatedHero>)

const queryClient = new QueryClient()

const renderHomePage = (initialEntries: string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <FavoriteHeroProvider>
                <QueryClientProvider client={queryClient}>
                    <HomePage />
                </QueryClientProvider>
            </FavoriteHeroProvider>
        </MemoryRouter>
    )
}

describe('Test in HomePage component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('should render Home Page with default values', () => {
        const { container } = renderHomePage()

        expect(container).toMatchSnapshot()
    })

    test('should call usePaginated with default values', () => {
        renderHomePage()

        expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 6, 'all')
    })

    test('should call usePaginated with custom query params', () => {
        renderHomePage(['/?page=2&limit=10&category=villains'])

        expect(mockUsePaginatedHero).toHaveBeenCalledWith(2, 10, 'villains')
    })

    test('should called usePaginated with default page and same limit on tab clicked', () => {
        renderHomePage(['/?tab=favorites&page=2&limit=10'])

        const [, , , villainsTab] = screen.getAllByRole('tab')

        fireEvent.click(villainsTab)

        expect(mockUsePaginatedHero).toHaveBeenCalledWith(2, 10, 'villains')
    })
})