import React from 'react'
import { assets, testimonialsData } from './../assets/assets';

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-12 py-8'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer testimonials</h1>
      <p className='text-gray-600 mb-12'>What Our Users Are Saying</p>
      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='bg-white/30 rounded-lg p-12 shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
            <div className='flex flex-col items-center justify-center'>
              <img src={testimonial.image} alt="" className='rounded-full w-14' />
              <h2 className='text-xl font-semibold mt-3 text-gray-800'>{testimonial.name}</h2>
              <p className='mb-2 text-stone-400'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((item, index) => (
                  <img src={assets.rating_star} alt=""
                    key={index}
                  />
                ))}
              </div>
              <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials