import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Home from './components/common/Home'

const App = () => (
  <Home/>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)