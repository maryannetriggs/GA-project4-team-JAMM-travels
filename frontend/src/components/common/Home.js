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
        <div className="midParallax">
          <h3>About Team JAMM</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <section>
          <div>
            <h2 className="centre">The Blogs</h2>
          </div>
          <div className="mainBlogIndex">
            <div>
              <img src="http://images.ctfassets.net/uld4p9k0kh49/2EW7HRp7BkZPaYVX8CX4VQ/4e3b34b738ef5028af781e670a5b2c2d/summer-amsterdam-FP.jpg" alt="48 Hours in Amsterdam"></img>
              <h4>48 Hours in Amsterdam</h4>
            </div>
            <div>
              <img src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/alaska-cruise-tours/wonder-lake-denali-national-park-mountains-background.jpg?$750x667$" alt="US Road Trip"></img>
              <h4>US Road Trip</h4>
            </div>
          </div>
        </section>
        <section>
          
        </section>
      </>
    )
  }
  
}

export default Home