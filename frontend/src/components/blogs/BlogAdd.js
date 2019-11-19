import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'

import BlogForm from './BlogForm'

class BlogAdd extends React.Component {
  constructor() {
    super()

    this.state = {
      blogData: {
        title: '',
        subtitle: '',
        author: '',
        story: '',
        date_published: '',
        tags: []
      },
      errors: {}
    }

    this.options = [
      { value: 1, label: 'Spring' },
      { value: 2, label: 'Summer' },
      { value: 3, label: 'Autumn' },
      { value: 4, label: 'Winter' },
      { value: 5, label: 'Without Children' },
      { value: 6, label: 'With Children' },
      { value: 7, label: 'Day Trip' },
      { value: 8, label: 'Weekend Break' },
      { value: 9, label: 'Short Break' },
      { value: 10, label: 'Long Break' },
      { value: 11, label: 'UK' },
      { value: 12, label: 'New Zealand' },
      { value: 13, label: 'USA' },
      { value: 14, label: 'Europe' },
      { value: 15, label: 'Oceania' },
      { value: 16, label: 'Asia' },
      { value: 17, label: 'Beach' },
      { value: 18, label: 'Outdoors' },
      { value: 19, label: 'Adventure' },
      { value: 20, label: 'Culture' },
      { value: 21, label: 'Food and Drink' },
      { value: 22, label: 'Luxury' },
      { value: 23, label: 'Romantic' },
      { value: 24, label: 'Wellness' },
      { value: 25, label: 'Road Trip' },
      { value: 26, label: 'City Break' },
      { value: 27, label: 'Countryside' }
    ]

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCreatableSelect = this.handleCreatableSelect.bind(this)
  }

  handleChange(e) {
    const blogData = { ...this.state.blogData, [e.target.name]: e.target.value }
    this.setState({ blogData })
  }

  handleCreatableSelect(selected) {
    const tags = selected ? selected.map(item => item.value) : []
    const blogData = { ...this.state.blogData, tags }
    this.setState({ blogData })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.blogData)
    axios.post('/api/blogs/', this.state.blogData , {
      headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjF9.4kD-_14uaLI3v-XqTAvwqncQZdSdAGMRh7dYl3vGaAM' }
    })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors  }))
  }

  render() {
    if (!this.state.blogData) return null
    console.log(this.state.blogData)
    return (
      <BlogForm
        blogData={this.state.blogData}
        options={this.options}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleCreatableSelect={this.handleCreatableSelect}
      />
    )
  }
}

export default BlogAdd