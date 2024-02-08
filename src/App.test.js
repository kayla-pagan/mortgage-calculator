import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
    // arrange
    render(<App />);

    // act
    const heading = screen.getByText(/Bank of React/);
    
    // assert
    expect(heading).toBeInTheDocument();
});
