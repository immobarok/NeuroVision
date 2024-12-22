import React from 'react'
import { assets } from '../assets/assets'

const GenerateImageBtn = () => {
  return (
    <div className='flex flex-col items-center justify-center pb-12'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try Now</h1>
      <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-200'>Generate Image
        <img src={assets.star_group} alt="" className='h-6' />
      </button>
    </div>
  )
}

export default GenerateImageBtn