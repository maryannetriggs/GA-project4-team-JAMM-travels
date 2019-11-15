import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => (

  <header className="navbar stickyNavbar">
    <section className="navbar-center">
      <span>Team Jamm Travels</span>
    </section>
    <section className="navbar-section">
      <Link to="/blogs">See All The Blogs</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </section>
  </header>

)

export default withRouter(Navbar)