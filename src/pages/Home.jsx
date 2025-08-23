import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { categories } from './../components/Category';
import Cart from '../components/Cart';
import { food_items } from '../db/food';

const Home = () => {
  const [cartItems, setCartItems] = useState(food_items);
  
    // function filterItems(type) {
    //   const filters = {
    //     "All": () => food_items,
    //     "Brackfast": () => food_items.filter(item => item.food_category === "breakfast"),
    //     "Burger": () => food_items.filter(item => item.food_category === "burger"),
    //     "Dessert": () => food_items.filter(item => item.food_category === "dessert"),
    //     "Lunch": () => food_items.filter(item => item.food_category === "main_course"),
    //     "Dinner": () => food_items.filter(item => item.food_category === "main_course"),
    //     "Natural": () => food_items.filter(item => item.food_type === "veg")
    //   };
    //   setCartItems(filters[type]() || food_items);
    // }

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
    </div>
  )
}

export default Home;