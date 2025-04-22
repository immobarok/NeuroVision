import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from './../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewPoint={{ once: true }}
    >
      <motion.div className='text-stone-500 inline-flex border rounded-full px-6 py-2 border-neutral-500 gap-2'
        initial={{ opacity: 0.2, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Premier visual art conjurer for crafting vivid imagery from text</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >Turn text to <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
          image
        </span>, in second.</motion.h1>
      <motion.p className='text-center max-w-xl mx-auto mt-5'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >Ignite your imagination with AI. Transform your ideas into stunning visual masterpieces in moments—just describe, and let the magic unfold <span className='bg-gradient-to-r from-pink-900 via-teal-500 to-red-700 bg-clip-text text-transparent'>!</span></motion.p>
      <motion.button className=' bg-gray-950 font-semi-bold text-2xl mt-10 py-3 border rounded-full w-auto sm:text-lg px-12 gap-2 items-center flex border-neutral-400 text-white'

        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
        onClick={onClickHandler}
      >
        Generate Image
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>
      <motion.div className='flex gap-3 mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6).fill('').map((item, index) => (
          <motion.img
            className='rounded hover:scale-105 duration-200 transition-all cursor-pointer max-sm:w-10'
            whileHover={{ scale: 1.05, duration: 0.1 }}
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt='' key={index} width={70}
          />
        ))
        }
      </motion.div>
      <motion.p className='mt-3 text-neutral-600'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >Generate image from NeuroVision</motion.p>
    </motion.div>
  )
}

export default Header