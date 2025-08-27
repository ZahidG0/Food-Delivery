import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import { categories } from './../components/Category';
import Cart from '../components/Cart';
import { food_items } from '../db/food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from 'react-icons/rx';
import CartItems from '../components/CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';

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
const items = useSelector(state => state.cart.items);
  const reduxDispatch = useDispatch();

  const handleIncrement = (id) => {
    reduxDispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    reduxDispatch(decrementQuantity(id));
  };

  const handleDelete = (id) => {
    reduxDispatch(removeItem(id));
  };

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
          <div>
            {
              items.length > 0 ? (
                items.map((item, index) => (
                  <CartItems key={index} image={item.food_image} name={item.food_name} price={item.price} quantity={item.food_quantity} onIncrement={() => handleIncrement(item.id)} onDecrement={() => handleDecrement(item.id)} onDelete={() => handleDelete(item.id)} />
                ))
              ) : (
                <div className='w-full h-[80vh] flex flex-col items-center justify-center gap-6'>
                  <span className='text-6xl'>🛒</span>
                  <h2 className='text-3xl font-semibold'>Your cart is empty</h2>
                  <p className='text-center text-gray-600'>Add items to it now. Click on the + button to add items to your cart.</p>
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Home;