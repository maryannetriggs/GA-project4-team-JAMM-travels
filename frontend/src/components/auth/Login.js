import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => (
  <>
  <form>
    <div className="form-group">
      <label className="form-label" htmlFor="email">Email</label>
      <input 
        className="form-input" 
        name="email" 
        type="text" 
        id="email" 
        placeholder="Email"
      />
      <label className="form-label" htmlFor="password">Password</label>
      <input 
        className="form-input" 
        name="password" 
        type="password"
        id="password" 
        placeholder="Password"
      />
      <br />
      <button className="btn" type="submit">Log in</button>
    </div>
  </form>
  <small>Don\'t have an account yet? <Link to="/register">Register</Link></small>
  </>
)

export default Login


