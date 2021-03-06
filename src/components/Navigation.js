import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Historia 1-3</Link></li>
      <li><Link to="/about">Historia 4-6</Link></li>
      <li><Link to="/sample">Historia 7-9</Link></li>
    </ul>
  </div>
)

export default Navigation
