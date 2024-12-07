import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Delight Zone/i);
  expect(headerElement).toBeInTheDocument();
});
