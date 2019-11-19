import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => (

  <header className="navbar stickyNavbar">
    <section className="navbar-center">
      <Link to="/" className="logo-wrapper"><span>Team jamm Travels</span></Link>
    </section>
    <section className="navbar-section">
      <Link to="/blogs/new">+</Link>
      {/* <Link to="/profile">Profile</Link> */}
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </section>
  </header>

)

export default withRouter(Navbar)