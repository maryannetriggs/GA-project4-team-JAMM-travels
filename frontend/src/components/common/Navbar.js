import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    Auth.logout(
      this.props.history.push('/')
    )
  }

  render() {
    return (
      <header className="navbar stickyNavbar">
        <section className="navbar-center">
          <Link to="/" className="logo-wrapper"><span>Team jamm Travels</span></Link>
        </section>
        <section className="navbar-section">
          <Link to="/blogs/new">+</Link>
          <Link to="/login">Log In</Link>
          <a onClick={this.handleLogout}>Log Out</a>
        </section>
      </header>
    )
  }
}


export default withRouter(Navbar)