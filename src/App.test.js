import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByText(/learn react/i);
  expect(Element).toBeInTheDocument();
});
