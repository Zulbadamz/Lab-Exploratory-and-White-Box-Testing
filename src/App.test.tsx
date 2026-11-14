
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Counter Application Tests', () => {

  test('displays the initial count and buttons', () => {
    render(<App />);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  test('increments count from 0 to 1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count from 0 to -1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  test('resets count to 0', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('handles multiple actions in sequence', () => {
    render(<App />);

    const increment = screen.getByRole('button', { name: 'Increment' });
    const decrement = screen.getByRole('button', { name: 'Decrement' });
    const reset = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(screen.getByText('Count: 3')).toBeInTheDocument();

    fireEvent.click(decrement);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    fireEvent.click(reset);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    fireEvent.click(increment);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

});
