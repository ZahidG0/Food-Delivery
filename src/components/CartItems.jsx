import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';


const CartItems = ({ image, name, price, quantity, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className='w-full h-[150px] shadow-lg p-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4'>
        {/* image */}
        <div className='w-full sm:w-[60%] h-[80px] sm:h-full flex items-center justify-center gap-2 sm:gap-4 p-1 sm:p-2'>
            <div className='w-[60px] sm:w-[60%] h-[60px] sm:h-full overflow-hidden rounded-lg'>
                <img src={image} alt={name || 'Food item'} className='w-full h-full object-cover' />
            </div>
            <div className='flex-1 sm:w-[40%] h-full flex flex-col items-start justify-between gap-1'>
                <div className='font-semibold text-xl truncate w-full'>
                    {name}
                </div>
                <div className='text-sm sm:text-base w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] flex items-center justify-between text-amber-50 bg-slate-400 rounded-lg overflow-hidden shadow-lg border-2 border-green-400'>
                    <button onClick={onDecrement} className='text-green-400 w-[30%] h-full bg-white font-semibold flex items-center justify-center hover:bg-green-400 hover:text-white text-2xl'> - </button>

                    <button className='w-[40%] h-full bg-slate-200 text-green-400 font-semibold flex items-center justify-center text-2xl'> {quantity} </button>

                    <button onClick={onIncrement} className='w-[30%] h-full bg-white text-green-400 font-semibold flex items-center justify-center hover:bg-green-400 hover:text-white text-2xl'> + </button>
                </div>
            </div>
        </div>

        {/* Price */}
        <div className='w-full sm:w-auto'>
            <div className='flex flex-row sm:flex-col justify-between sm:justify-start items-center gap-12 sm:items-end h-full p-1 sm:p-2'>
                <span className='text-xl font-semibold text-green-500'>$ {price}</span>
                <RiDeleteBin5Line onClick={onDelete} className='text-red-500 text-2xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform' />
            </div>
        </div>
    </div>
  )
}

export default CartItems;