import React from 'react';
import logo from './logo.svg';
import './dist/App.css';

function App() {
  const clicked = 10;
  function handleSubmit(e:any) {
    e.preventDefault();
    alert('You clicked submit.');
  }
  return (
    <div className="App">
      <p>number of times clicked {clicked}</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
