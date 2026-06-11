import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route,Routes } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import contactUs from './Pages/Contactus'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactus' element={<contactUs/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
