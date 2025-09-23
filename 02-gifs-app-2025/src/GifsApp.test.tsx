import { describe, expect, test } from 'vitest'
import  { render } from '@testing-library/react'

import { GifsApp } from './GifsApp'

describe('Test in GifsApp component', () => {
    test('Should render component property', () => {
        const { container } = render(<GifsApp />)

        expect(container).toMatchSnapshot()
    })
})