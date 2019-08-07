import React from 'react'
import { render } from '@testing-library/react'

import App from '../pages/index.jsx'

describe('With React Testing Library', () => {
    it('Shows "HOMEPAGE"', () => {
        const { getByText } = render(<App />)

        expect(getByText('HOMEPAGE')).not.toBeNull()
    })
})

describe('With React Testing Library Snapshot', () => {
    it('Should match Snapshot', () => {
        const { asFragment } = render(<App />)

        expect(asFragment()).toMatchSnapshot()
    })
})