import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, SecureRoute } from 'react-router-dom'

import 'spectre.css'
import './styles/style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'

import About from './components/footerlinks/About'
import FAQ from './components/footerlinks/FAQ'
import Contact from './components/footerlinks/Contact'

import BlogAdd from './components/blogs/BlogAdd'
import BlogEdit from './components/blogs/BlogEdit'
import BlogShow from './components/blogs/BlogShow'

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/blogs/:id/edit" component={BlogEdit}/>
        <Route path="/blogs/new" component={BlogAdd}/>
        <Route path="/blogs/:id" component={BlogShow}/>

        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path='/profile' component={Profile}/>

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