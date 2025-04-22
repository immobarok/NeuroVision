import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28 bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl shadow-xl'
    >
      <h1 className='text-3xl sm:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
        Create AI Images
      </h1>
      <p className='text-gray-500 text-lg text-center mb-10'>Turn your imagination into visual</p>

      <div className='flex flex-col md:flex-row items-center gap-10'>
        <img
          className='w-80 xl:w-96 rounded-xl shadow-md hover:scale-105 transition-transform duration-300'
          src={assets.sample_img_1}
          alt="AI generated sample"
        />

        <div className='max-w-xl px-2'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800 mb-4'>
            Introducing the AI-powered <span className='text-indigo-600'>Text to Image Generator</span>
          </h2>
          <p className='text-gray-600 leading-relaxed text-base sm:text-lg'>
            Effortlessly bring your ideas to life with our advanced AI image generator. Whether you require captivating visuals or distinctive imagery, our tool seamlessly transforms your text into striking images in just a few clicks.
            <br />
            <span className='italic text-purple-500'>Envision it, articulate it, and witness it materialize instantly.</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
