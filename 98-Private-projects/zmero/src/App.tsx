import React from 'react';
import './App.scss';

import Navbar from './view/components/menu/menu';
import SearchBar from './view/components/search/search';
import Explore from './view/components/explore/explore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>

      <SearchBar></SearchBar>
      <Explore></Explore>
    </div>
  );
}

export default App;
