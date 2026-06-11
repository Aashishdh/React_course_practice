import React from 'react'

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      {/* Animated sad face */}
      <div className="text-9xl mb-6 animate-bounce">😢</div>
      
      {/* Main heading with fade-in */}
      <h1 className="text-6xl font-extrabold text-black mb-4 animate-pulse">
        404 | Page Not Found
      </h1>
      
      {/* Subtext */}
      <p className="text-lg text-gray-800 mb-6">
        The page you are looking for could not be found.
      </p>
      
      {/* Button to go home */}
      <a 
        href="/" 
        className="px-6 py-3  text-white bg-cyan-700  rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default Notfound
