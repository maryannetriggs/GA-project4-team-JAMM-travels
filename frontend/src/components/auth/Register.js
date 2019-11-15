import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => (
  <section>
    <h2 className="centre">Register</h2>
    <form className="centre">
      <div className="formBackground form-group">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <label className="form-label">Profile Picture</label>
          <input
            className="form-input"
            type="text"
            id="profilePicture"
            name="profilePicture"
            placeholder="Profile Picture (URL)"
          />
          <label className="form-label">Country of Residence</label>
          <input
            className="form-input"
            type="text"
            id="country"
            name="country"
            placeholder="Country of Residence"
          />
          <label className="form-label">Email</label>
          <input
            className="form-input"
            name="email"
            type="text"
            id="email"
            placeholder="Email" 
          />
          <label className="form-label">Password</label>
          <input
            className="form-input"
            name="password"
            type="password"
            id="password"
            placeholder="Password" 
          />
          <label className="form-label">Password Confirmation</label>
          <input
            className="form-input"
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
          />
          <br />
          <button className="btn" type="submit">Register</button>
          <br />
        </div>
        <small>Already have an account?<Link to="/login">Log In</Link></small>
      </div>
    </form>
    <h1>Ya</h1>
  </section>
)
    
export default Register