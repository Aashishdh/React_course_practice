import React from 'react'
import profile from "./assets/profile.jpg"
import bird from "./assets/bird.jpg"
import Card from './Components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user="Ram" img={profile}/>
      <Card user="Sita" img={bird} />
    </div>
  )
}

export default App