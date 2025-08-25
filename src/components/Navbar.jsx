
import React, { useContext, useEffect } from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { MdFastfood } from 'react-icons/md';
import { dataContext } from '../context/UserContext';

const Navbar = () => {
  const { input, setInput, cartItems, setCartItems } = useContext(dataContext);

  useEffect(() => {
    const filteredData = cartItems.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()));
    setCartItems(filteredData);
  }, [input]);

  return (
    <div className='w-full h-24 flex items-center justify-between px-10 bg-gray-100 shadow-md'>
      {/* logo */}
      <div className='flex items-center justify-between w-16 h-16 px-4 rounded-md shadow-md bg-white'>
        <MdFastfood className='text-3xl text-green-500' />
      </div>

      {/* Search Bar */}
      <form action="" onSubmit={(e) => e.preventDefault()} className='flex items-center justify-between w-1/2 h-16 gap-8 px-4 bg-white rounded-lg shadow-md'>
        <IoSearch className='text-3xl text-green-500' />
        <input type="text" placeholder='Search food items...' className='w-full text-xl h-full outline-none' onChange={(e) => setInput(e.target.value)} />
      </form>

      {/* Shopping Cart */}
      <div className='flex items-center justify-between w-16 h-16 px-4 rounded-md shadow-md bg-white relative'>
        <span className='text-xl absolute top-1.5 right-2.5 text-red-500 font-semibold'>0</span>
        <FaShoppingBasket className='text-3xl text-green-500' />
      </div>
    </div>
  )
}

export default Navbar;