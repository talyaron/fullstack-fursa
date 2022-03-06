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
export {}