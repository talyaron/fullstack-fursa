import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";


function Home(){
    return (
        <div>
            <Link to='/TelAviv'><button>TelAviv</button></Link>
            <Link to='/London'><button>London</button></Link>
            <Link to='/NewYork'><button>NewYork</button></Link>
        </div>

    );
}

export default Home;