import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import CreateUser from './components/CreateUser';

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/products" element={user ? <ProductList/>: <Navigate to="/login"/>}/>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/create" element={<CreateUser />} />            
          </Routes>
        </Router>
      </Provider>
    </I18nextProvider>
  );
};

export default App;