import React from 'react'
import Header from './Header'
import BottomNav from'./BottomNav'
import Menu from './Menu'


function Market() {
  return (
    <div className="Middle">
      <Menu/>
      <Header />
      <BottomNav />
      <h1>Market</h1>
    </div>
  )
}

export default Market
