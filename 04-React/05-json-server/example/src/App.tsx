import {useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

 
  function handleAxios(){
    // axios.get('http://localhost:3004/posts').then(({data})=>console.log(data));
    // axios.get('http://localhost:3004/posts/2').then(({data})=>console.log(data));


    // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));

    //axios.put('http://localhost:3004/posts/2',{'title':'best book', author:'best author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))

    // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));


  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleAxios}>Activate</button>
      </header>
    </div>
  );
}

export default App;
