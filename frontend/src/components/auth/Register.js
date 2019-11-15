import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => (
  <section>
    <h2 className="centre">Register</h2>
    <form className="centre">
      <div className="formBackground form-group">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <label>Profile Picture</label>
          <input
            className="form-input"
            type="text"
            id="profilePicture"
            name="profilePicture"
            placeholder="Profile Picture (URL)"
          />
          <label>Country of Residence</label>
          <input
            className="form-input"
            type="text"
            id="country"
            name="country"
            placeholder="Country of Residence"
          />
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
          <label>Password Confirmation</label>
          <input
            className="form-input"
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
          />
          <br />
          <button className="btn" type="submit">Register</button>
        </div>
        <small>Already have an account? <Link to="/login">Log In</Link></small>
      </div>
    </form>
  </section>
)
    
export default Register