import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';


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