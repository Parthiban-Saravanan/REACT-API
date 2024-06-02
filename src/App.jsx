import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<ProductList />} />
            </Routes>
          </div>
          <Cart />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
