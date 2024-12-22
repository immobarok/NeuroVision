import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-400 mb-8'>Turn your imagination into visual</p>
      <div className='flex flex-col md:flex-row items-center gap-5 md:gap-14 '>
        <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />
        <div className='px-2'>
          <h2 className='text-xl mb-2 sm:text-3xl text-gray-800'>Intriducing the AI-powered Text to Image Generator</h2>
          <p className='text-gray-600'>Effortlessly bring your ideas to life with our advanced AI image generator. Whether you require captivating visuals or distinctive imagery, our tool seamlessly transforms your text into striking images in just a few clicks. Envision it, articulate it, and witness it materialize instantly.</p>
        </div>
      </div>
    </div>
  )
}

export default Description