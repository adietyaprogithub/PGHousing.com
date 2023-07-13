import "./navbar.css"
import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">PGHouseing.com</span>
        <div className="navItems">
           <Link to='/Login'>
           <button className="navButton">Login</button>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar