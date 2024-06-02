import React from 'react';
import { useCart } from '../context/CartContext';
import products from '../data/product.json';

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="content">
      <h1>Products</h1>
      <div>
        {products.products.map(product => (
          <div key={product.id} className="product">
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
