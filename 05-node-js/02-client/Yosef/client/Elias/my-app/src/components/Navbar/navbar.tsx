import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss';


function navbar() {

  return (
    <div className='navbar'>
        <div className='sec'><Link to='/'>NY</Link></div>
        <div className=' sec'><Link to='/TA'>TA</Link></div>
        <div className=' sec'><Link to='/London'>London</Link></div>
    </div>
  )
}

export default navbar;