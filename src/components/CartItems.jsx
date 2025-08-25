import React from 'react'
import image1 from './../assets/image1.avif';
import { RiDeleteBin5Line } from 'react-icons/ri';

const CartItems = () => {
  return (
    <div className='w-full h-[120px] shadow-lg p-2 flex items-center justify-between gap-4'>
        {/* image */}
        <div className='w-[60%] h-full flex items-center justify-center gap-4 p-2'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg '>
                <img src={image1} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='w-[40%] h-full flex flex-col items-start justify-center gap-2'>
                <div className='font-semibold text-2xl'>
                    Piksta
                </div>
                <div className='text-2xl w-[110px] h-[50px] flex items-center justify-between text-amber-50 bg-slate-400 rounded-lg overflow-hidden shadow-lg border-2 border-green-400'>
                    <button className='text-green-400 w-[30%] h-full bg-white font-semibold flex items-center justify-center hover:bg-green-400 hover:text-white'> - </button>

                    <button className='w-[40%] h-full bg-slate-200 text-green-400 font-semibold flex items-center justify-center'> 1 </button>

                    <button className='w-[30%] h-full bg-white text-green-400 font-semibold flex items-center justify-center hover:bg-green-400 hover:text-white'> + </button>
                </div>
            </div>
        </div>

        {/* Price */}
        <div>
            <div className='flex flex-col justify-start items-end gap-6 h-full p-2'>
                <span className='text-2xl font-semibold text-green-500'>$ 400.00</span>
                <RiDeleteBin5Line className='text-red-500 text-2xl cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default CartItems;