import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {

    const product = cartList.find(prod => prod.id === item.id);

    if (!product) return setCartList([...cartList, { ...item, quantity}]);

    product.quantity = quantity;
    setCartList([...cartList.filter(prod => prod.id !== item.id), product]);
  }

  const removeFromCart = (id) => {
    setCartList(cartList.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartList([]);
  }

  return(
    <CartContext.Provider value={{cartList, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )

}

export default CartContextProvider;