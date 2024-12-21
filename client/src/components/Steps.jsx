import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
      <h1 className='py-2 text-center font-semibold text-3xl text-gray-500'>How it works</h1>
      <p className='text-center  text-gray-500 pb-5'>Transform Words Into Stunning Images</p>
      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {
          stepsData.map((item, index) => {
            return (
              <div key={index}
                className='flex item-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.03] transition-all duration-300 rounded-md'
              >
                <img width={40} src={item.icon} alt={item.title} />
                <h2 className='text-xl font-medium'>{item.title}</h2>
                <p className='text-stone-500'>{item.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Steps