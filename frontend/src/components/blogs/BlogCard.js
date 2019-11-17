import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = ({ title, subtitle, image, id }) => (
  <div className="card blogcard">
    <div className="card-image">
      <Link to={`/blogs/${id}`}>
        <img src={image} alt={title}/>
      </Link>
    </div>
    <div className="card-header">
      <div className="card-title h5">{title}</div>
      {/* <div className="card-subtitle text-gray">{subtitle}</div> */}
    </div>
    <div className="card-body">
      {subtitle}
    </div>
    <br />
  </div>
)

export default BlogCard