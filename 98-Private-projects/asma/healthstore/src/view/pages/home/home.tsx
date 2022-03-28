import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.scss';

//components
import Card from '../../components/card/Card';


function Home() {
  const [treatments, setTreatments] = useState([]);
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    axios.get("/categorys/get-categories").then(({ data }) => {
        console.log('get',data);
        setCategories(data.categories);
    });
    axios.get("/treatments/get-treatments").then(({ data }) => {
        console.log('get',data);
        setTreatments(data.treatments);
    });

}, []);


  return (
    <div className="home">
      <header className="App-header">
        <div className="header-image">
          <img src="https://thehealthstore.co/wp-content/uploads/2019/01/thehealthstoreco-logo.png" />
        </div>
        <div className="row">
          <div className="text">Products</div>
          {categories.map((item, index) => {
            const { name, img } = item; //deconstractor 
            return <Card key={index} info={{ name, img }} />
          })}
        </div>
        <div className="row">
          <div className="text"> Treatments</div>
          {treatments.map((item, index) => {
            const { name, img } = item; //deconstractor 
            return <Card key={index} info={{ name, img }} />
          })}
        </div>
      </header>
    </div>
  );
}

export default Home;
