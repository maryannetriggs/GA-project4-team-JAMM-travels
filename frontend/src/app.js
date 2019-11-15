import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'spectre.css'
import './styles/style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import About from './components/footerlinks/About'
import FAQ from './components/footerlinks/FAQ'
import Contact from './components/footerlinks/Contact'

import BlogsIndex from './components/blogs/BlogsIndex'
import BlogShow from './components/blogs/BlogShow'

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/blogs/:id" component={BlogShow}/>
        <Route path="/blogs" component={BlogsIndex}/>

        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>

        <Route path="/about" component={About}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/contact" component={Contact}/>

      </Switch>
    </main>
    <Footer/>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)