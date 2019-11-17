import React from 'react'
import axios from 'axios'


class BlogShow extends React.Component {
  constructor() {
    super()

    this.state = {
      blogs: null
    }
    
  }

  componentDidMount() {
    const blogId = this.props.match.params.id
    axios.get(`/api/blogs/${blogId}`)
      .then(res => this.setState({ blogs: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }


  render() {
    if (!this.state.blogs) return null
    console.log(this.state.blogs.tags)
    const { blogs } = this.state
    return (
      <>
      <div className="blogshow-wrapper">
        <section className="blogshow-images">
          {blogs.images.map(image => (
            <img className="blogshow-images" key={image.id} src={'http://localhost:8000' + image.image}/>
          ))}
        </section>

        <hr/>

        <section className="blogshow-text">
          <h2>{blogs.title}</h2>
          <h4>{blogs.subtitle}</h4>
          <p className="blog-caps">Date Published: {blogs.date_published}</p>
          <p>{blogs.story}</p>
          <p className="blog-caps">Authored By: {blogs.author}</p>
          <div>
            {blogs.tags.map(tag => (
              <p className="blogshow-tags" key={tag.id}>{tag.tag}</p>
            ))}
          </div>

        </section>
      </div>
      </>
    )
  }

}

export default BlogShow