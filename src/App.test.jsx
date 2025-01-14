import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; 


global.fetch = jest.fn();

global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

global.alert = jest.fn();

console.log = jest.fn();
console.error = jest.fn();

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to react/i);
  expect(linkElement).toBeInTheDocument();
});