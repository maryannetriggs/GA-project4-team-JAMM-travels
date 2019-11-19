import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => (
  <section className="login-page">
    <h2 className="centre">Log In</h2>
    <form className="centre">
      <div className="formBackground form-group">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <button className="btn" type="submit">Log in</button>
          <br />
        </div>
        <br />
        <small>Don't have an account yet? <Link className="login-register-link" to="/register">Register</Link></small>
      </div>
    </form>
  </section>
)

export default Login


