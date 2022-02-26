import React from 'react'
import Header from './Header'
import BottomNav from'../components/BottomNav'
import Menu from './Menu'

function Food() {
  return (
    <div className="Middle">
      <Menu/>
      <Header />
      <BottomNav />
      <h1>Food</h1>
    </div>
  );
}

export default Food
