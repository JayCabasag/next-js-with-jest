import Home from '@/app/page';
import { render, screen } from '@testing-library/react'

describe('Home Page - Rendering', () => {
    it('should have home page text', () => {
        render(<Home />);
        expect(screen.getByText('Home page')).toBeInTheDocument()
    });

    it('should have button with text Click Me', () => {
        render(<Home />);
        expect(screen.getByRole('button', { name: 'Click Me'}))
        .toBeInTheDocument()
    })

    it('should have input field with label Enter Random Text', () => {
        render (<Home />);
        expect(screen.getByLabelText(/Enter random Text/)).toBeInTheDocument()
    })

    it('should have input field with label Enter Specific Text', () => {
        render (<Home />);
        expect(screen.getByLabelText(/specific/)).toBeInTheDocument()
    })

    it('should find input failed by placeholder text Search ', () => {
        render (<Home />);  
        expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument()
    })

    it('Should find input field with display value', () => {
        render(<Home />);
        screen.getByDisplayValue(/AUDI/)
    })

});