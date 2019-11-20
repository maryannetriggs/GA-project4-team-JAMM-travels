import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      loginFormData: {
        email: '',
        password: ''
      },
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.loginFormData)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/')
      })
      .catch(err => this.setState({ errors: err.response.data.errors  }))
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    const loginFormData = { ...this.state.loginFormData, [e.target.name]: e.target.value }
    this.setState({ loginFormData })
  }

  render() {
    console.log(this.state.loginFormData)
    return (

      <section className="login-page">
        <h2 className="centre">Log In</h2>
        <form className="centre" onSubmit={this.handleSubmit}>
          <div className="formBackground form-group">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />
              <button className="btn" type="submit">Log in</button>
              <br />
            </div>
            <br />
            <small>No account yet?  <Link className="login-register-link" to="/register">Register</Link></small>
          </div>
        </form>
      </section>
    )
  }
}

export default Login


