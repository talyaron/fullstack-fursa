import React from 'react';
import './App.scss';

import Card from './view/components/card/card';

const students: Array<Place> = [{ name: 'S', place: 'Mashad', img: 'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1' }, { name: 'Mona', place: "Nazereth", img: 'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200' }];

interface Place {
  name: string;
  place: string;
  img: string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {students.map((student, index) => {
          const { name, place, img } = student; //deconstractor 

          return <Card key={index} info={{ name, place, img }} />
        })}
      </header>
    </div>
  );
}

export default App;
