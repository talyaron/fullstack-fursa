import React from 'react';
import logo from './logo.svg';
import './App.scss';
//components
import Exercise from './view/components/exercise/Exercise';

const members = [{name:'Saleem', part:'chest'},{name:'Omar',part:"Legs"}];
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {members.map((member, index)=>{
        return <Exercise key={index} name={member.name} part={member.part} />
      })}
      </header>
    </div>
  );
}

export default App;
