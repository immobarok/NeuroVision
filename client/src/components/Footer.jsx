import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <Link>
          <img width={80} src={logo} alt="" />
      </Link>
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-600 max-sm:hidden'>Copyright @mbrk.com | All right reserved</p>
      <div className='flex gap-2.5'>
        <img className='shadow-sm  rounded-full cursor-pointer' src={assets.facebook_icon} alt="" width={35} />
        <img className=' cursor-pointer shadow-sm  rounded-full' src={assets.twitter_icon} alt="" width={35} />
        <img className='cursor-pointer shadow-sm  rounded-full' src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  )
}

export default Footer