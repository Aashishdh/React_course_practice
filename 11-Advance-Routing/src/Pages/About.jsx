import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  // useNavigate
  const navigate=useNavigate()
  const btnclicked=()=>{
    navigate('/')
  }
  return (
    <div>
      <button onClick={btnclicked}
      className='bg-cyan-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button>
      <h1>About Page</h1>
    </div>
  )
}

export default About
