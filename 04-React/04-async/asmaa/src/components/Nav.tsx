import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
        <li><Link to='/'>Landing</Link></li>
        <li><Link to='/main/signUp'>Signup</Link></li>
    </ul>
  )
}

export default Nav