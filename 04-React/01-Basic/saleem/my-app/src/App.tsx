import { useState } from 'react';
import './App.scss';

const names:Array<string> = [ 'saleem','laila','alex','omar','daniel','lana','ibrahim'];

function App() {
  const [name, setName] = useState(names[Math.floor(Math.random() *7)
  ]);
  function handleChangeName() {

    setName(names[Math.floor(Math.random() *7)]);
    
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleChangeName}>change name</button>
      <div className="name" >{name}</div>
      </header>
    </div>
    
  );
}

export default App;
