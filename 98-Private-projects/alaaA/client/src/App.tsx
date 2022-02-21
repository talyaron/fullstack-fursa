import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
const [productsCart, setproductsCart] = useState([]);




return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="Login" element={<Login />}></Route>
    <Route path="Cart" element={<Cart />} />
    <Route path="Login" element={<HomePage />} />
    <Route path="signUp" element={<SignUp />} />
    <Route path="AboutUs" element={<AboutUs />} />
    <Route path="Group" element={<Group />} />
    <Route path="CreateGroup" element={<CreateGroup />} />
    <Route path="HomePage" element={<HomePage />} />
    <Route path="Store" element={<Store />} >
    {/* <Route path="HomePage" element={<HomePage />} /> */}
    </Route>
    <Route path="mygroups" element={<Mygroups />} />
    <Route path="aboutUsIn" element={<AboutUsIn />} />
    <Route path="help" element={<Help />} />
    <Route path="settings" element={<Settings />} />



    {/* <Route></Route> */}
    {/* </Route> */}
    

    {/* <Route path="invoices" element={<Invoices />} /> */}
  </Routes>
</BrowserRouter>)
>>>>>>> AlaaTemp
}

export default App;
