import AboutPage from "@/app/about/page";
import { screen, render } from '@testing-library/react'

describe('About page rendering', () => {
    it('shout display', () => {
        render(<AboutPage />);
        expect( screen.getByText('About page')).toBeInTheDocument()
    })
})