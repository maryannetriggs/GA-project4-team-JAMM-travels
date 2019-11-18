import React from 'react'
import axios from 'axios'

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

    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)
    if (!this.state.blogs) return null
    // console.log(this.state.blogs[1])
    // console.log(this.state.blogs[1].images[0].image)
    // console.log(opacity)
    return (
      <>
        <div style={{ opacity }} className="parallax"></div>
        <div className="midParallax">
          <h2>About Team jamm</h2>
          <p>Team JAMM consists of Jack, Alex, Mary-Anne and Mark</p>
        </div>

        <section className="homepage-section homepage-section-grey">
          <div>
            <h2 className="centre">The Blogs</h2>
          </div>
          <div className="mainBlogIndex">

            {this.state.blogs.map(blog => (
              <BlogCard key={blog.id} {...blog} {...blog.images} />
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
          <div className="featuredBlogsWrapper">
            <h2 className="centre">Featured Blogs</h2>
            <div className="featuredBlogs centre">

              <div className="featuredBlog1">
                <img src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/Attractions/statue-of-liberty-new-york-p.jpg?imwidth=450" alt="New Yorker for a Day"></img>
                <h5 className="centre">Blog Title</h5>
              </div>

              <div className="featuredBlog2">
                <img src="https://www.renfe-sncf.com/rw-en/blog/PublishingImages/paris-christmas/paris_christmas.jpg" alt="Paris at Christmas"></img>
                <h5 className="centre">Blog Title</h5>
              </div>

              <div className="featuredBlog3">
                <img src="http://images.ctfassets.net/uld4p9k0kh49/2EW7HRp7BkZPaYVX8CX4VQ/4e3b34b738ef5028af781e670a5b2c2d/summer-amsterdam-FP.jpg" alt="48 Hours in Amsterdam"></img>
                <h5 className="centre">Blog Title</h5>
              </div>

              <div className="featuredBlog4">
                <img src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/alaska-cruise-tours/wonder-lake-denali-national-park-mountains-background.jpg?$750x667$" alt="US Road Trip"></img>
                <h5 className="centre">Blog Title</h5>
              </div>

            </div>
          </div>
        </section>
      </>
    )
  }

}

export default Home