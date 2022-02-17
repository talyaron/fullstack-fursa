import './App.scss';

//components
import Card from './view/components/card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </header>
    </div>
  );
}

export default App;
