import React from 'react'
import RightCardcontent from './RightCardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 rounded-[2.5rem]  overflow-hidden relative shadow-lg'>
      {/* Background Image */}
      <img className='h-full w-full object-cover' src={props.img} alt="women" />
      <RightCardcontent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default Rightcard