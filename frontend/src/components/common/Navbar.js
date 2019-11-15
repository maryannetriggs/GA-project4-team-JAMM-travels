import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <Link className="centre logo" to="/">Team JAMM Travels</Link>
    <Link to="/blogs">See All The Blogs</Link>
    <Link to="/login">Log In</Link>
    <Link to="/register">Register</Link>
    
  </nav>
)

export default withRouter(Navbar)