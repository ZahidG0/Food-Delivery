import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import { categories } from './../components/Category';
import Cart from '../components/Cart';
import { food_items } from '../db/food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from 'react-icons/rx';
import CartItems from '../components/CartItems';

const Home = () => {

  const { cartItems, setCartItems, showCart, setShowCart } = useContext(dataContext);

    function filterItems (type) {
      if(type === "All") {
        setCartItems(food_items);
      }else{
        let newList = food_items.filter((item) => item.food_category === type);
        setCartItems(newList);
      }
    }

  return (
    <div className='w-full bg-slate-200'>
        <Navbar />
        <div className='w-full pt-5 flex flex-wrap items-center justify-center gap-4'>
          {categories.map((category) => (
            <div className='w-[150px] flex flex-col items-center justify-center gap-4 bg-white shadow-xl rounded-md p-4 hover:bg-green-200 cursor-pointer transition-all duration-300' onClick={() => filterItems(category.name)} key={category.id}>
              {category.image}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        <Cart cartItems={cartItems} />

        {/* Cart Items */}

        <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white/90 shadow-2xl backdrop-blur-md transition-all duration-300 overflow-y-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>

          <header className='w-full flex items-center justify-between p-4 border-b'>
            <span className='font-semibold text-green-500 text-3xl'>Order Items</span>
            <RxCross2 className='text-red-500 hover:text-black text-4xl cursor-pointer hover:scale-110 transition-all duration-200' onClick={() => setShowCart(false)} />
          </header>
          <CartItems />
        </div>
    </div>
  )
}

export default Home;