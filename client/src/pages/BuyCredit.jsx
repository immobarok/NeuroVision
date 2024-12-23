import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion';

const BuyCredit = () => {
  const { user } = useContext(AppContext)
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10 sm:mb-20'>
      <button className='border border-gray-500 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div key={index} className='bg-white/50 rounded-lg px-8 py-12 drop-shadow-md order w-80 m-auto hover:scale-[1.02] transition-all duration-500'>
            <span className='bg-gradient-to-r from-blue-900 via-green-500 to-purple-700 bg-clip-text text-transparent font-bold lg:text-4xl sm:text-xl text-4xl'>NV.</span>
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'><span className='text-3xl font-medium'>${item.price}</span>/{item.credits} credits</p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-50'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default BuyCredit