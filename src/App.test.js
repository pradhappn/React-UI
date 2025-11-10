import { render, screen } from '@testing-library/react';
import App from './App';

test('renders course heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Course/i);
  expect(headingElement).toBeInTheDocument();
});
