import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './view/components/Item/Item';
import Card from './view/pages/Card/Card';
import Store from './view/pages/Store/Store';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

interface ItemsIF {
  name: string;
  price: number;
}

function App() {

  const [storeItems, setStoreItems] = useState<Array<ItemsIF>>([
    { name: "a", price: 10 },
    { name: "b", price: 10 },
    { name: "c", price: 10 },
    { name: "d", price: 10 },
  ]);
  const [cardItems, setCardItems] = useState<Array<ItemsIF>>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/item" element={
            <Item />} />
          <Route path="/store" element={
            <Store
              cardItems={cardItems}
              setCardItems={setCardItems}
              storeItems={storeItems}
              setStoreItems={setStoreItems}
            />} />
          <Route path="/card" element={
            <Card
              cardItems={cardItems}
              setCardItems={setCardItems}
              storeItems={storeItems}
              setStoreItems={setStoreItems}
            />} />
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Store />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="dataConatiner">
        {data.map((album:any, index) => {
          return (
            <div key={index} style={{background: `url(${album.thumbnailUrl})`}} className="album">
              <p>albumId: {album.albumId}</p>
              <p>title: {album.title}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;


  // const [data, setData] = useState([]);
  //
  // useEffect(() => {
  //   getAlbums();
  // }, []);

  // function getAlbums() {
  //   return new Promise((resolve, reject) => {
  //     fetch('https://jsonplaceholder.typicode.com/photos')
  //       .then(response => response.json())
  //       .then(json => {
  //         resolve(json);
  //         setData(json);
  //       }).catch(err => {
  //         reject(err);
  //       })
  //   });
  // }
