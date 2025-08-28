
import { LuVegan } from 'react-icons/lu';
import { GiChickenOven } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const ADD_TO_CART_TEXT = 'Add to Cart';

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6'>
      {
        cartItems.map(item => (
          <div key={item.id} className='bg-amber-50 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden p-2 border-3 border-transparent hover:border-green-500 cursor-pointer transition-all duration-300'>
            <img src={item.food_image} alt={item.food_name} className='w-full h-98 object-cover' />
            <div className='p-4'>
              <h3 className='font-semibold text-xl mb-2'>{item.food_name}</h3>
              <p className='text-gray-600 text-sm mb-3'>{item.food_description}</p>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-bold text-green-600'>${item.price}</p> <span className='text-green-500 text-sm'>{item.food_type === 'veg' ? <LuVegan /> : <GiChickenOven />} {item.food_type}</span>
              </div>
              <button className='mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300'
              onClick={() => {
                dispatch(addItem({ id: item.id, food_name: item.food_name, price: item.price, food_image: item.food_image, food_quantity: 1 }));
                toast.success(`${item.food_name} added to cart!`);
              }}>
              {ADD_TO_CART_TEXT}</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart;