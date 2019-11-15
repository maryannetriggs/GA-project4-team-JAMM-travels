import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <nav>
      <span className="centre">Team Jamm Travels</span>
      <Link to="/blogs">See All The Blogs</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </nav>
  </div >
)

export default withRouter(Navbar)