import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Card from './view/components/card/Card';

const text="hii all";

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Card />
        <Card />
     
      </header>
    </div>
  );
}

export default App;


{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<Card />
<p>
  the text  is {text}
</p>

<a  
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}
