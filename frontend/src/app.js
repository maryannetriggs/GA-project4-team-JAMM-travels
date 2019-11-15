import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'spectre.css'
import './styles/style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import BlogsIndex from './components/blogs/BlogsIndex'

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/blogs" component={BlogsIndex}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)