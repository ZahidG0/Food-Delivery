import React, { createContext, useState } from 'react'
import { food_items } from '../db/food';

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [cartItems, setCartItems] = useState(food_items);

  const data = {
    input,
    setInput,
    cartItems,
    setCartItems
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext;