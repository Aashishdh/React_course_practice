import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route,Routes } from 'react-router-dom'
import Product from './Pages/Product'
import Notfound from './Pages/Notfound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
