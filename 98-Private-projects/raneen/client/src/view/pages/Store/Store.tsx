import "./Store.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeReviewCard from "../../components/productCard/productCard";

async function add() {
  const name = "WARM WOOL PREMIUM COAT - LIMITED EDITION";
  const typeId = "COATS";
  const url =
    "https://static.zara.net/photos///2022/V/0/1/p/2584/747/436/2/w/1500/2584747436_2_3_1.jpg?ts=1642604108776";
  const price = 750;
  const description =
    "Coat made of a top-quality warm wool blend. Lapel collar and long sleeves. Tied belt in the same fabric. Front pockets. Contrast interior lining. ";
  const quantity = 100;

  axios
    .post("/products/add-product", {
      name,
      typeId,
      url,
      price,
      description,
      quantity,
    })
    .then(({ data }) => {
      console.log(data);
    });
  console.log("aa");


   const { data } = await axios.patch("/products/get-product",  {name,} );
    console.log(data);
  }






function Store() {
  

  const { coatsId } = useParams();
  add();

  // axios.get('/user', {
  //   params: {
  //     ID: 12345
  //   }
  // })
    // axios
    // .patch("/products/get-product", {
    //    coatsId,
    // })
    // .then(({ data }) => {
    //   console.log(data);
    // });

  console.log(coatsId);
  return (
    // <div >
    // name:{coatsId}
    // </div>
    
    <div className="wrapper">
      <div>
        <RecipeReviewCard />
      </div>
      <div>
        <RecipeReviewCard />
      </div>
      <div>
        <RecipeReviewCard />
      </div>
      <div>
        <RecipeReviewCard />
      </div>
      <div>
        <RecipeReviewCard />
      </div>
      <div>
        <RecipeReviewCard />
      </div>
      <div>
        <RecipeReviewCard />
      </div>
    </div>
  );
}

export default Store;

// import React from "react";
// //components
// import Card from "./view/components/card/Card";
// import Mainbar from "./view/components/menu/menu";
// import { useState, useEffect } from "react";

// //import Coats from './view/pages/Coats/Coats';

// const clothes: Array<item> = [
//   {
//     name: "WOOL BLEND HIGH NECK COAT",
//     price: 500,
//     img: "https://static.zara.net/photos///2022/V/0/1/p/2096/289/802/2/w/830/2096289802_1_1_1.jpg?ts=1637256490476",
//   },
//   {
//     name: "COAT WITH DETACHABLE FAUX FUR DETAIL ON THE COLLAR",
//     price: 200,
//     img: "https://static.zara.net/photos///2022/V/0/1/p/2179/289/704/2/w/1126/2179289704_1_1_1.jpg?ts=1640000139595",
//   },
// ];
// interface item {
//   name: string;
//   price: number;
//   img: string;
// }

// // interface prob{
// //   children: React.ReactNode;
// //   open: false;
// //   onClose:()=>void;
// // }

// function Store() {
//   const [kitttens, setKittens] = useState([]);
//   useEffect(() => {
//     fetch("/get-all-users")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });

//     //fetch kittens
//     fetch("/get-all-kitens")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setKittens(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);
//   return (
//     <div className="wrapper">
//       {/* {kitttens.map((kity:any)=>{
//       return<p key={kity._id}>{kity.name}</p>
//     })}
//       <header className="App-header"> */}

//       <Mainbar></Mainbar>

//       {/*
//      <video loop autoPlay>
//         <source
//           src="https://github.com/talyaron/fullstack-fursa/blob/main/98-Private-projects/raneen/src/RPReplay_Final1645900869.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video> */}

//       {clothes.map((item1, index) => {
//         const { name, price, img } = item1;
//         return <Card key={index} info={{ name, price, img }} />;
//       })}
//       <TextInput />
//       <TextShow />
//       <Counter />
//     </div>
//   );
// }

// export default App;
export {};
