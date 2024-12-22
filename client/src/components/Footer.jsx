import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <Link>
        <span className='bg-gradient-to-r from-blue-900 via-green-500 to-purple-700 bg-clip-text text-transparent font-bold lg:text-4xl sm:text-3xl'>NV.</span>
      </Link>
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-600 max-sm:hidden'>Copyright @mbrk.com | All right reserved</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="" width={35} />
        <img src={assets.twitter_icon} alt="" width={35} />
        <img src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  )
}

export default Footer