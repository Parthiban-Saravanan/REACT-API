import { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      let updatedCart = [...state.cart];
      if (itemIndex >= 0) {
        updatedCart[itemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.price,
      };
    }
    case 'REMOVE_FROM_CART': {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex < 0) return state;
      const item = state.cart[itemIndex];
      let updatedCart = [...state.cart];
      if (item.quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart = updatedCart.filter(item => item.id !== action.payload.id);
      }
      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - item.price,
      };
    }
    default:
      return state;
  }
}

// Create context
const CartContext = createContext();

// Context provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}
