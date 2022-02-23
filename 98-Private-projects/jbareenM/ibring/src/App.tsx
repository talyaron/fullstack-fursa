import React from 'react';
import './App.scss';
import CakeContainer from './redux/testRedux/Cake/CakeContainer';
import IceCreamContainer from './redux/testRedux/iceCream/iceCreamContainer';
import ItemContainer from './redux/testRedux/ItemContainer/ItemContainer';
import UsersContainer from './redux/testRedux/Users/UsersContainer';

function App() {
  // const counter: any = useSelector<any>(state => state.counterReducer);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <UsersContainer />
      {/* <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <IceCreamContainer /> */}
      {/* <ListForm />
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
    </div>
  );
}

export default App;
