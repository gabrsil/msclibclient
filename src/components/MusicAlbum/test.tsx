import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<MusicAlbum />', () => {
    it('should render the heading', () => {
        const albumName = "Angels Cry"
        const bandName = "Angra"
        const url = ""        
        const { container } = render(<Main
        {...{albumName, bandName, url}}
        />)

        expect(
            screen.getByText(/angra/i)
        ).toBeInTheDocument()
    })
})