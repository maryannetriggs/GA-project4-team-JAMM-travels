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
    // console.log(this.state.blogs.images[0])
    const { blogs } = this.state
    return (
      <>
        <h1>Blog Show Page</h1>
        <h2>{blogs.title}</h2>
        <div>
          {blogs.images.map(image => (
            <img key={image.id} src={image.image}/>
          ))}
        </div>
      </>
    )
  }

}

export default BlogShow