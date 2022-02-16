import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {

    const product = cartList.find(prod => prod.id === item.id);

    if (!product) {
      localStorage.setItem('cart', JSON.stringify([...cartList, { ...item, quantity}]));
      return setCartList([...cartList, { ...item, quantity}]);
    }

    product.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify([...cartList.filter(prod => prod.id !== item.id), product]));
    setCartList([...cartList.filter(prod => prod.id !== item.id), product]);
  }

  const removeFromCart = (id) => {
    localStorage.setItem('cart', JSON.stringify(cartList.filter(item => item.id !== id)));
    setCartList(cartList.filter(item => item.id !== id));
  }

  const clearCart = () => {
    localStorage.removeItem('cart')
    setCartList([]);
  }

  useEffect(() => {
    const cartInMemory = JSON.parse(localStorage.getItem('cart'));
    console.log(cartInMemory)
    if(cartInMemory) {
      console.log(cartInMemory)
      setCartList(cartInMemory)
    }
  },[])

  return(
    <CartContext.Provider value={{cartList, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )

}

export default CartContextProvider;