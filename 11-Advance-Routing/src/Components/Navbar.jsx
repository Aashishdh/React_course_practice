import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between bg-yellow-900'>
      <h2 className='text-xl font-bold text-white'>V lab</h2>
      <div className='flex gap-8 text-white font-bold'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/product">ContactUs</a>
      </div>
    </div>
  )
}

export default Navbar
