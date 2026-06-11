import React from 'react'

const App = () => {
  /*localStorage.setItem("User","Aashish")*/
  const user={
    name:"Aashish dhungana",
    age:21,
    Address:"patan"
  }

  localStorage.setItem("user", JSON.stringify(user));
  
  const usera=JSON.parse(localStorage.getItem('user'))
  console.log(usera);
  
  return (
    <div>
      App
    </div>
  )
}

export default App
