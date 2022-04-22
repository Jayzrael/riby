import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Products from './pages/Products'
import Business from './pages/Business'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Header from './component/Header'
import Footer from './component/Footer'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Slider from './component/Slider'


function App() {
  return (
    <div>
      <Router basename='/'>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 /> 
        <Section4 />
        <Slider />
        <Footer />
        <Routes>
          <Route exact path = '/' component= {Home} />
          <Route path='/Products' component={Products} />
          <Route path = '/Business' component= {Business} />
          <Route path = '/Blogs' component= {Blogs} />
          <Route path = '/About' component= {About} />
        </Routes>
      </Router>    

    </div>
  );
}

export default App;
