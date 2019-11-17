import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Footer = () => (

  <footer className="navbar">
    <section className="navbar-section footer-wrapper">
      <Link to="/about">About</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
      <p>© Team JAMM Travels 2019</p>
    </section>
  </footer>

)

export default withRouter(Footer)