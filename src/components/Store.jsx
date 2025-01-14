import { configureStore, createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCartItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;

let cartFromStorage = null;
if (typeof window !== 'undefined' && window.sessionStorage) {
  const storedCart = sessionStorage.getItem('cart');
  if (storedCart) {
    cartFromStorage = JSON.parse(storedCart);
  }
}

const preloadedState = cartFromStorage ? { cart: { items: cartFromStorage.items } } : undefined;

const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState,
});

export default Store;