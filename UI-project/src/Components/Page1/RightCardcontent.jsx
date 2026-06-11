import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardcontent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        
        {/* Number circle */}
        <h2 className='bg-white text-black rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>
          {props.id+1}
        </h2>
        
        {/* Content section */}
        <div className='w-full mb-2'>
          <p className='text-white text-base leading-relaxed font-medium opacity-90'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.
          </p>
    
          <div className='flex items-center justify-between mt-16 w-full'>
            <button className='bg-blue-600 text-white font-semibold rounded-full px-8 py-3 text-sm tracking-wide shadow-md hover:bg-blue-700 transition-all'>
              {props.tag}
            </button>
            
            <button className='bg-blue-600 text-white rounded-full h-11 w-11 flex items-center justify-center shadow-md hover:bg-blue-700 transition-all'>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default RightCardcontent