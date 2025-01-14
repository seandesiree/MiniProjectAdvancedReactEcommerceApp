import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

global.fetch = jest.fn();

global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

global.alert = jest.fn();

console.log = jest.fn();
console.error = jest.fn();

test('renders login form and submits credentials', async () => {
  const mockSetAuthToken = jest.fn();
  render(<Login setAuthToken={mockSetAuthToken} />);

  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(loginButton);
});