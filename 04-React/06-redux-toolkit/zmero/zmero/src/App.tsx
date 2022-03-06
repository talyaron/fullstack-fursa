import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Card from './components/card/card'
import { selectCard, selectText } from './components/card/cardSlice';
import { useAppSelector } from './app/hooks';
import GeneralCard from './components/generalcard/generalcard'
interface cardprops {
  img: string;
  text: string;
}

function App() {
  const temp = useAppSelector(selectCard)
  return (
    <div className="App">
      <header className="App-header">
        <div className="global">
          <GeneralCard />
        </div>

      </header>
    </div >
  );
}

export default App;
