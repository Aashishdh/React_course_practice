// import React, { useState } from 'react'

// const App = () => {
//   const [a, seta] = useState('0')
//   const [username, setusername] = useState("Sarthak")
// return (
//     <div>
//       <h1>The value of a: {a} <br/> The value of user is:{username}</h1>
//       <button onClick={()=>{
//         seta(1)
//         setusername("Aashish dhungana")
//       }}>
//         Click me
//       </button>
//     </div>
//   )
// }

// export default App


/* Counter APP*/

import React, { useState } from 'react'
const App = () => {
  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>The value: {num}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }}>
        Increment
      </button>
      <button onClick={()=>{
        setnum(num-1)
      }}>
        Decrement
      </button>
    </div>
  )
}

export default App
