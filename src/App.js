import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Products from './pages/Products'
import Business from './pages/Business'
import About from './pages/About'
import Blogs from './pages/blogs'
import Contact from './pages/contact'
import ConsentPage from './pages/ConsentPage'
import 'antd/dist/antd.css';

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
           <Route path='/contact' element={<Contact />} />
           <Route path='/ConsentPage' element={<ConsentPage />} />
        </Routes>
    </Router>
  )
}

export default App