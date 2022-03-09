import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { useAppDispatch } from './app/hooks';
import { logintAsync } from './features/userLogin/userLoginReducer';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(logintAsync({ email: "jbareen@a", pass: "123" }));
  }, []);

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
