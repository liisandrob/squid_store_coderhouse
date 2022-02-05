import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {

    const position = cartList.map(e => {return e.id}).indexOf(item.id);
    if(position === -1) {
      item.quantity = quantity;
      setCartList([
        ...cartList,
        item
      ])
    } else {
      cartList[position].quantity = quantity
      setCartList(cartList)
    }
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