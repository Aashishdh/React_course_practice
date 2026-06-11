// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input placeholder='Enter your name' onChange={(e)=>{
//         console.log(e.target.value)
//       }} 
//       type='text'
      
//       />
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>
      <div
        onMouseMove={(elem)=>{
          console.log(elem);
          
        }}
        className='box'
        >
      </div>
    </div>
  )
}

export default App
