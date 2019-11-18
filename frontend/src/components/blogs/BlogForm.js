import React from 'react'
import { Link } from 'react-router-dom'

const BlogForm = () => (
  <section>
    <h2 className="centre">Blog</h2>
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
          <br />
          <button className="btn" type="submit">Button</button>
          <br />
        </div>
      </div>
    </form>
  </section>
)
    
export default BlogForm