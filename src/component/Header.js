import { NavLink } from "react-router-dom"
import {Link} from 'react-router-dom'


const header = () => {
  return (
    <header>
      <div className="container">
        <div className="container1"> 
        <div className="brand">
              <img src="/Logo.png" alt="" className="logo" />
            </div>
            <div className="menu">
            <h1 className="l1">Products</h1>
               <img src="/Vector.png" alt="" className="row" />
               <h1 className="l2">Business</h1>
               <img src="/Vector.png" alt="" className="arrow" />
              <h1 className="l3">About us</h1>
              <h1 className="l4">Blogs</h1>
              <h1 className="l5">Contact</h1>
            </div> 
        </div>
      </div>
    </header>
  )
}

export default header