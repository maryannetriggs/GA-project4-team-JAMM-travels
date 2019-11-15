import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/blogs">See All The Blogs</Link>
    <Link to="/login">Log In</Link>
    <Link to="/register">Register</Link>
  </nav>
)

export default withRouter(Navbar)