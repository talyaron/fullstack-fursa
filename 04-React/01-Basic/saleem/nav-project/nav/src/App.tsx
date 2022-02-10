import { Link } from 'react-router-dom';
import './App.scss';

//components
import Card from './view/components/card/Card';


interface Place{
  name:string;
  place:string;
  img:string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to={`/store/`}>

        <div className='button'>login</div>
      </Link>
      
      </header>
    </div>
  );
}

export default App;
