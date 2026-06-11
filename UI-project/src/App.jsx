import React from 'react'
import img2 from './assets/img2.jpg'
import img1 from './assets/img1.jpg'
import img3 from './assets/img3.jpg'
import Page1 from './Components/Page1/Page1'

const App = () => {
  const users=[

    {
      img:img2,
      intro:'',
      tag:'Satisfied'
    },

    {
      img:img1,
      intro:'',
      tag:'Underserved'
    },

    {
      img:img3,
      intro:'',
      tag:'Underbanked'
    }

   
  ]
  return (
  <div>
    <Page1 users={users}/>
  </div>
  )
}

export default App