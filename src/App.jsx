import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/Store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CreateUser from './components/CreateUser';
import SearchBar from './components/SearchBar';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const onLogin = (user) => {
    setUser(user);
  };

  const ProductListWithSearch = () => {
    return (
      <div className="product-page">
        <SearchBar setSearchTerm={setSearchTerm} />
        <ProductList user={user} searchTerm={searchTerm} />
      </div>
    );
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
          <Router future={{ v7_startTransition: true }}>
            <Routes>
              <Route path="/" element={<Login onLogin={onLogin} />} />
              <Route path="/cart" element={<ShoppingCart user={user} />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="/products" element={<ProductListWithSearch />} />
              <Route path="/delete" element={<DeleteUser />} />
              <Route path="/update" element={<UpdateUser />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </I18nextProvider>
  );
};



export default App;