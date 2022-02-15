import React from 'react';
import './App.css';

import TelAviv from './view/pages/TelAviv/TelAviv';
import London from './view/pages/London/London';
import NewYork from './view/pages/NewYork/NewYork';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function App() {
  // const nav = useNavigate();

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/TelAviv" element={<TelAviv />} />
          <Route path="/London" element={<London />} />
          <Route path="/NewYork" element={<NewYork />} />
        </Routes>
      </BrowserRouter>

      <button>tel aviv</button>
      <button>London</button>
      <button>NewYork</button>
    </div>
  );
}

export default App;
