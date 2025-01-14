import React from 'react';
import { render, fireEvent, getAllByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from './Store';
import ShoppingCart from './ShoppingCart';

global.fetch = jest.fn();

global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

global.alert = jest.fn();

console.log = jest.fn();
console.error = jest.fn();

test('renders cart items and handles checkout', () => {

  Store.dispatch({
    type: 'cart/addToCart',
    payload: { id: 1, title: 'Test Product', price: 10.0 },
  });

  const { getByText, queryByText } = render(
    <Provider store={Store}>
      <ShoppingCart />
    </Provider>
  );

  
  expect(getByText('Test Product')).toBeInTheDocument();

  const checkoutButton = getByText('Checkout');
  fireEvent.click(checkoutButton);

  expect(queryByText('Test Product')).not.toBeInTheDocument();
  expect(getByText('Your cart is empty.')).toBeInTheDocument();


  const state = Store.getState();
  expect(state.cart.items.length).toBe(0);
});