import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-7'>
        <h4 className='text-white rounded-full bg-black uppercase text-[12px] px-6 py-2'>Target Audience</h4>
        <button className='rounded-full bg-gray-300 uppercase tracking-widest text-sm px-6 py-2'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar