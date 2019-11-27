import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = ({ title, subtitle, images, id }) => (
  <div className="card blogcard">
    <Link to={`/blogs/${id}`}>
      {images.length > 0 ?
        <div className="card-image">
          {/* <img src={'http://localhost:8000' + images[0].image} alt={title}/> */}
          <img src={images[0].image} alt={title}/>
        </div>
        : ''}
    
      <div className="card-header">
        <div className="card-title h4">{title}</div>
        {/* <div className="card-subtitle text-gray">{subtitle}</div> */}
      </div>
      <div className="card-bod">
        {subtitle}
      </div>
    </Link>
  </div>
)

export default BlogCard