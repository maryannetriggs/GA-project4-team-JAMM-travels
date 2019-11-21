import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
      contactFormData: {
        email: '',
        message: ''
      },
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.contactFormData)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/')
      })
      .catch(err => this.setState({ errors: err.response.data.errors  }))
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    const contactFormData = { ...this.state.contactFormData, [e.target.name]: e.target.value }
    this.setState({ contactFormData })
  }

  render() {
    console.log(this.state.contactFormData)
    return (

      <section className="login-page">
        <h2 className="centre">Contact Us</h2>
        <form className="centre" onSubmit={this.handleSubmit}>
          <div className="formBackground form-group">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <label className="form-label">Message</label>
              <input
                className="form-input"
                type="message"
                id="message"
                name="message"
                placeholder="Write us a Message"
                onChange={this.handleChange}
              />
              <br />
              <button className="btn" type="submit">Send</button>
              <br />
            </div>
            <br />
          </div>
        </form>
      </section>
    )
  }
}

export default Contact


