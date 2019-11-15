import React from 'react'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      currentScrollHeight: 0
    }
    
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 20) * 8
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight })
      }
    }
  }

  render() {
    // console.log(this.state)
    const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
    // console.log(opacity)
    return (
      <>
        <div style={{ opacity }} className="parallax"></div>
        <div className="mid-parallax">
          <h3>About Team JAMM</h3>
          <p></p>
        </div>
        <div className="parallax"></div>
      </>
    )
  }
  
}

export default Home