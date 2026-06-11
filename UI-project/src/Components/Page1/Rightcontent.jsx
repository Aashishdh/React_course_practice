import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className=' p-6 h-full w-2/3 flex flex-nowrap gap-6 overflow-x-auto'>
        {props.users.map(function(elem,idx){
          return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default Rightcontent