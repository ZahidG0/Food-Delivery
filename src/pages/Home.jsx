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
import { toast } from 'react-toastify';

const Home = () => {

  const { cartItems, setCartItems, showCart, setShowCart } = useContext(dataContext);

  function filterItems(type) {
    if (type === "All") {
      setCartItems(food_items);
    } else {
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

  const subTitle = items.reduce((total, item) => total + item.price * item.food_quantity, 0);

  const deliveryFee = subTitle > 0 ? 10 * items.reduce((total, item) => total + item.food_quantity, 0) : 0;  
  const tax = (subTitle + deliveryFee) * 0.1;
  const totalAmount = subTitle + deliveryFee + tax;

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

        {/* pricing */}
        <div className='w-full border-t-2 mt-5 border-gray-500'>
          <div className='w-full p-4 flex flex-col gap-4'>
            <div className='w-full flex items-center justify-between'>
              <span className='font-semibold text-xl text-gray-600'>Subtotal</span>
              <span className='font-bold text-xl text-gray-800'>${subTitle.toFixed(2)}</span>
            </div>
            <div className='w-full flex items-center justify-between'>
              <span className='font-semibold text-xl text-gray-600'>Delivery Fee</span>
              <span className='font-bold text-xl text-gray-800'>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className='w-full flex items-center justify-between'>
              <span className='font-semibold text-xl text-gray-600'>Tax</span>
              <span className='font-bold text-xl text-gray-800'>${tax.toFixed(2)}</span>
            </div>
            <div className='w-full border-t mt-2 border-gray-500'></div>
            <div className='w-full flex items-center justify-between'>
              <span className='font-semibold text-xl text-gray-600'>Total</span>
              <span className='font-bold text-xl text-gray-800'>${totalAmount.toFixed(2)}</span>
            </div>
            <button className='w-full bg-green-500 text-white text-xl py-3 rounded-md font-semibold hover:bg-green-600 transition-all duration-300' onClick={() => toast.success("Order Placed Successfully!")} >Checkout Now</button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home;