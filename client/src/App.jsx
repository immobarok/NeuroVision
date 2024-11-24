import React from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28  py-4 sm:py-4 md:py-6 lg:py-8 min-h-screen bg-gradient-to-b from-teal-100 to-orange-100'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
    </div>
  )
}

export default App