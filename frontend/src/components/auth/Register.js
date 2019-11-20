import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      registerFormData: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        country_of_residence: ''
      },
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.registerFormData)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors  }))
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    const registerFormData = { ...this.state.registerFormData, [e.target.name]: e.target.value }
    this.setState({ registerFormData })
  }

  render() {
    console.log(this.state.registerFormData)
    return (
      <section className="register-page">
        <h2 className="centre">Register</h2>
        <form className="centre" onSubmit={this.handleSubmit}>
          <div className="formBackground form-group">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <label className="form-label">Country of Residence</label>
              <input
                className="form-input"
                type="text"
                id="country_of_residence"
                name="country_of_residence"
                placeholder="Country of Residence"
                onChange={this.handleChange}
              />
              <label className="form-label">Email</label>
              <input
                className="form-input"
                name="email"
                type="text"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <label className="form-label">Password</label>
              <input
                className="form-input"
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <label className="form-label">Password Confirmation</label>
              <input
                className="form-input"
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
              <br />
              <button className="btn btn-group-block" type="submit">Register</button>
              <br />
            </div>
            <small>Already have an account?  <Link className="login-register-link" to="/login">Log In</Link></small>
          </div>
        </form>
      </section>
    )
  }
}

export default Register