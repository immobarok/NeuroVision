import React, { useContext } from 'react'
import { assets } from './../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import logo from "../assets/logo.png"
const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between '>
      <Link to="/">
        <img width={80} src={logo} alt="" />
      </Link>
      <div>
        {
          user ?
            <div className='flex items-center sm:gap-3'>
              <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                <img src={assets.credit_star} alt="" />
                <p className='text-xs sm:text-sm font-medium text-gray-800'>Credit left: {credit}</p>
              </button>
              <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
              <div className='relative group'>
                <img src={assets.profile_icon} alt="" className='drop-shadow w-10 sm:ml-2' />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                  <ul className='list-none m-0 p-0 bg-white rounded-md border text-sm'>
                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                  </ul>

                </div>
              </div>
            </div>
            :
            <div className='flex items-center gap-2 sm:gap-5'>
              <p className='cursor-pointer'
                onClick={() => navigate('/buy')}>Pricing</p>
              <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-10 py-2 sm:px-10 text-sm rounded-full'>Login</button>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar