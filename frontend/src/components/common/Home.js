import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import BlogCard from '../blogs/BlogCard'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      currentScrollHeight: 0,
      blogs: null
    }

  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 20) * 8
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight })
      }
    }

    axios.get('/api/blogs')
      .then(res => this.setState({ blogs: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    const { blogs } = this.state
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)
    if (!blogs) return null
    // console.log(blogs)
    // console.log(opacity)
    return (
      <>
        <div style={{ opacity }} className="parallax"></div>
        <div className="midParallax">
          <h2>About Team jamm</h2>
          <p>Team JAMM consists of Jack, Alex, Mary-Anne and Mark. Follow our family (and occassionally Uncle Adam) on our adventures travelling and exploring this beautiful planet</p>
        </div>

        <section className="homepage-section homepage-section-grey">
          <div>
            <h2 className="centre">The Blogs</h2>
          </div>
          <div className="mainBlogIndex">

            {blogs.map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))}

          </div>
        </section>

        <section className="homepage-section">
          <div className="cinemagraph centre">
            <video autoPlay loop>
              <source src="https://i.imgur.com/gOsHPsX.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="homepage-section">
          <div>
            <h2 className="centre">Featured Blogs</h2>
          </div>
          <div className="featured-blogs-wrapper">
            {blogs.slice(0, 4).map(blog => (
              <Link to={`/blogs/${blog.id}`}  key={blog.title}>
                {blog.images.length > 0 ?
                  <div className="featured-blogs">
                    <img src={'http://localhost:8000' + blog.images[0].image} alt={blog.title}></img>
                    <h6 className="centre">{blog.title}</h6>
                  </div>
                  : ''}
              </Link>
            ))}
          </div>

        </section>
      </>
    )
  }

}

export default Home