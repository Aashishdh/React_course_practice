import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between bg-yellow-900'>
      <h2 className='text-xl font-bold text-white'>V lab</h2>
      <div className='flex gap-8 text-white font-bold'>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/product">ContactUs</a> */}

          <Link to='/' >Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contactUs'>contactUs</Link>
          <Link to='/dynamic'>Dynamic</Link>
      </div>
    </div>
  )
}

export default Navbar
