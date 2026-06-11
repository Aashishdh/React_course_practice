/*
import React from 'react'
const App = () => {
  const submithandler=(e)=>{
    e.preventDefault()
    console.log("Form submitted successfully.");
    
  }
  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App */


/*Two way binding*/
import React from 'react'
import { useState } from 'react'
const App = () => {
  const [tittle, settittle] = useState('')
  const submithandler=(e)=>{
    e.preventDefault()
    settittle('')
    console.log("Form submitted successfully.");
    
  }
  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" placeholder='Enter your name' value={tittle} onChange={(e)=>{
          settittle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App 

