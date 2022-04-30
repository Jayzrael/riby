import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Products from './pages/products'
import Business from './pages/business'
import About from './pages/about'
import Blogs from './pages/blogs'
import Contact from './pages/contact'

function App() {
  return (
     <Router>
        <Navbar />
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route path='/products' element={<Products />} />
           <Route path='/business' element={<Business />} />
           <Route path='/about' element={<About />} />
           <Route path='/blogs' element={<Blogs />} />
           <Route  path = '/contact'  element = {<Contact />} />
        </Routes>
    </Router>
  )
}

export default App