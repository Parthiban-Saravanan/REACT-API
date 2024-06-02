import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, totalQuantity, totalAmount, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <h2 className="cart-item-title">{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
