import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Card from './components/card/card'
import { selectCard } from './components/card/cardSlice';
import { useAppSelector } from './app/hooks';
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
          <Card img={temp.img} text={temp.text}></Card>
        </div>
        <div className="menu">
          <Card img="https://st2.depositphotos.com/2124563/8893/i/450/depositphotos_88939092-stock-photo-flag-football-club-chelsea-england.jpg
" text="its me" ></Card>
          <Card img="https://thumbs.dreamstime.com/z/logo-italian-football-team-juventus-turin-italy-logo-juventus-turin-italy-215838605.jpg
" text="its you"></Card>
          <Card img="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg
" text="its us"></Card>
        </div>
      </header>
    </div >
  );
}

export default App;
