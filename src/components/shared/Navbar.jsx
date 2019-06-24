import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </ul>
  )
}

export default Navbar