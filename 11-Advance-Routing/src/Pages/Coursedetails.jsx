import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {
  // dynamic route
   const params= useParams()
  return (
    <div>
      <h1>{params.id}Course detail</h1>
      
    </div>
  )
}

export default Coursedetails
