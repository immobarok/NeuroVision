import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex border rounded-full px-6 py-2 border-neutral-500 gap-2'>
        <p>Premier visual art conjurer for crafting vivid imagery from text</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image</span>, in second.</h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Ignite your imagination with AI. Transform your ideas into stunning visual masterpieces in moments—just describe, and let the magic unfold <span className='bg-gradient-to-r from-pink-900 via-teal-500 to-red-700 bg-clip-text text-transparent'>!</span></p>
      <button className=' bg-gray-950 font-semi-bold text-2xl mt-10 py-3 hover:scale-105 duration-700 border rounded-full w-auto sm:text-lg px-12 gap-2 items-center flex border-neutral-400 text-white'>
        Generate Image
        <img className='h-6' src={assets.star_group} alt="" />
      </button>
      <div className='flex gap-3 mt-10'>
        {Array(6).fill('').map((item, index) => (
          <img
            className='rounded hover:scale-105 duration-200 transition-all cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt='' key={index} width={70}
          />
        ))
        }
      </div>
      <p className='mt-3 text-neutral-600'>Generate image from NeuroVision</p>
    </div>
  )
}

export default Header