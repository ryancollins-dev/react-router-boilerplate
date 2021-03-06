/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

interface Props {
  children: ReactNode
}

const App: FC<Props> = ({ children }) => (
  <div className="App">
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    {children}
  </div>
)

export default App
