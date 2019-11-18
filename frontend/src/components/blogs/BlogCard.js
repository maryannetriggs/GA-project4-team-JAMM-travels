import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = ({ title, subtitle, images, id }) => (
  <div className="card blogcard">
    <Link to={`/blogs/${id}`}>
      <div className="card-image">
        <img src={images} alt={title}/>
      </div>
      <div className="card-header">
        <div className="card-title h5">{title}</div>
        {/* <div className="card-subtitle text-gray">{subtitle}</div> */}
      </div>
      <div className="card-body">
        {subtitle}
      </div>
      <br />
    </Link>
  </div>
)

export default BlogCard