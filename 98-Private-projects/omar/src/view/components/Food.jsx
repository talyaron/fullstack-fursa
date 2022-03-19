import React from 'react'
import Header from './Header'
import BottomNav from'../components/BottomNav'
import Menu from './Menu'
import Search from './Search'
import ImagesBox from './ImagesBox'
function Food() {
  return (
    <div>
      <Menu />
      <div className="Middle">
        <Header />
        <BottomNav />
        <Search title="search for food" items={meals} />
        <ImagesBox />
      </div>
    </div>
  );
}

export default Food

const meals = [
  { title: 'Smoked salmon', year: 1994 },
  { title: 'Whole eggs', year: 1994 },
  { title: 'Ricotta', year: 1994 },
  { title: 'Cottage cheese', year: 1994 },
  { title: 'Sweet potatoes', year: 1994 },
  { title: 'Herbal tea', year: 1994 },
  { title: 'Whole-grain bread', year: 1994 },
  { title: 'Quinoa', year: 1994 },
  { title: ' Jerky', year: 1994 },
  { title: 'Homemade protein smoothies', year: 1994 },
  { title: 'Milk', year: 1994 },
  { title: 'Rice', year: 1994 },
  { title: 'Nuts and nut butters', year: 1994 },
  { title: 'Red meats', year: 1994 },
  { title: 'Potatoes and starches', year: 1994 },
  { title: 'Salmon and oily fish', year: 1994 },
  { title: 'Dried fruit', year: 1994 },
  { title: 'Avocados', year: 1994 },
];