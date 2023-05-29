import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <nav >
        <Link to="/">Home</Link>
        <Link to="/Faviorites">Favorites</Link>
    </nav>
  )
}

export default Navbar