import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route,Routes } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import ContactUs from './Pages/Contactus'
import Dynamic from './Pages/Dynamic'
import Coursedetails from './Pages/Coursedetails'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/dynamic' element={<Dynamic/>} />
        {/* Dynamic routing */}
        <Route path='/dynamic/:id' element={<Coursedetails/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
