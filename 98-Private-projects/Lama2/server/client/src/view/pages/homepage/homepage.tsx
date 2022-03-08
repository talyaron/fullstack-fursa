
import './homepage.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Courses from "../courses/courses";
import OffersCard from "../../components/offersCard/offers"
import { getProductAsync } from '../../../features/productsReducer/products';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {useState, useEffect} from 'react';
import { selectrainers } from '../../../features/trainersReducer/trainer';
import { selectOffers} from '../../../features/offersReducer/offers'
 import { getOfferAsync } from '../../../features/offersReducer/offers';

interface horse {
  name: string;
  age: number;
  img: string;
}


function Homepage() {
  const [names, Setname] = useState("Zoro");
  const [pics, Setphoto] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yr60poUFJojpky70RI6hrTBtWx5Dm3ifwQ&usqp=CAU");
  const names2 = ["Simba", "Ice", "Gucci", "Sun", "Ben"];

  const [kitttens, setKittens] = useState([]);
  const [courses, setCourses] = useState([]);
  const offers = useAppSelector(selectOffers)
   const trainers=useAppSelector(selectrainers)
   const dispatch = useAppDispatch();

  useEffect(()=>{
    // fetch('/get-all-users').then(res=>res.json()).then(data=>{
      
    //   console.log(data)
    //   setPpls(data);
      
    // })

    //fetch kittens
    fetch('/get-all-kitens')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setKittens(data);
    }).catch(err=>{
      console.error(err);
    })

    fetch('/get-all-courses')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCourses(data);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function changename(e: any) {
    e.preventDefault();
    var nameInArr = names2[Math.floor(Math.random() * names2.length)];
    Setname(nameInArr);
  }

  //using redux
  // function handleGetProducts(){
  //   dispatch(getProductAsync());

  // }

  function handleGetOffers(){
    dispatch(getOfferAsync());

  }

  return (
    <div className='maindiv'>
      <h3 className="h">Welcome to our farm</h3>
      {/* <p className="firstP">Our course duration is 10 weeks, one lesson a week .</p> */}
      {/* <div><button onClick={handleGetProducts}>get products</button></div> */}
      <div><button onClick={handleGetOffers}>get offers</button></div>
  
      {/* <button onClick={changename} className='btn' type="submit">click to see all the horses names</button> */}
      {/* </div> */}


      {/* <h1>Kittens</h1> */}
    {/* {kitttens.map((kity:any)=>{
      return<p key={kity._id}>{kity.name}</p>
    })} */}


<div className="offersDiv">
          {offers.status !== 'loading' ? offers.arrOffers.map((offer, index) => {
            // return (<p key={index}>{offer.name}</p> )
            return <OffersCard key={index} name={offer.name} description={offer.description} cost={offer.cost}></OffersCard>
          }) : <div>loading</div>}
    
          </div>

    
      <Courses />
      <div className="ani">
        <div className='animation'>

        </div></div>

    </div>



  );
}

export default Homepage;