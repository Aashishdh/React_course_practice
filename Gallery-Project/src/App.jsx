import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

 const getData=async()=>{
   const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
    console.log(response.data)
  }

  useEffect(() => {
  getData()
  }, [index])
  

  let Printuserdata=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading</h3>

  if(userdata.length>0){
    Printuserdata=userdata.map(function(elem,idx){
      return(
        <div key={idx}>
          <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 bg-black overflow-hidden rounded-xl' >
            <img className='h-full w-full object-cover' src={elem.download_url} alt="img" />
            </div>
          <h3 className='text-white font-bold text-sm'> {elem.author}</h3>

          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      {/* <button
        onClick={getData}
        className='bg-red-600 text-white mb-3 px-5 py-2 rounded'
      >
        Get Data
      </button> */}

      <div className='flex h-[80%] flex-wrap gap-5 p-2'>
        {Printuserdata}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
         <button className='bg-cyan-500 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95'
         onClick={()=>{
          if(index>1){
          setIndex(index-1)
          setUserData([])
          }
         }}
         >
        Prev
      </button>

         <h4>Page {index}</h4>
      <button className='bg-cyan-500 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-95'
      onClick={()=>{
        setUserData([])
        setIndex(index+1)
      }}
      >
        Next
      </button>
      </div>
    
    </div>
  )
}

export default App
