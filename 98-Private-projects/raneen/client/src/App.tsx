import React, { useState } from "react";
// import React from "react";
import { render } from "react-dom";
import "./index.scss";
import "./App.scss";
import Card from './view/components/card/Card';
//  import Mainbar from './view/components/menu/menu';
import { Counter } from "./features/counter/Counter";
import TextShow from "./features/text/TextShow";
import TextInput from "./features/text/TextInput";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./view/pages/HomePage/HomePage";
import SignUp from "./view/pages/SignUp/SignUp";
// import AboutUs from "./view/pages/AboutUs/AboutUs";
// import Store from "./view/pages/Store/Store";
// import Help from "./view/pages/Help/Help"


// const clothes:Array<item> = [{name:'WOOL BLEND HIGH NECK COAT', price:500,img:'https://static.zara.net/photos///2022/V/0/1/p/2096/289/802/2/w/830/2096289802_1_1_1.jpg?ts=1637256490476'}
// ,{name:'COAT WITH DETACHABLE FAUX FUR DETAIL ON THE COLLAR',price:200, img:'https://static.zara.net/photos///2022/V/0/1/p/2179/289/704/2/w/1126/2179289704_1_1_1.jpg?ts=1640000139595'}];
// interface item{
//   name:string;
//   price:number;
//   img:string;
// }

// function App() {

//   return (

//     <div className="App">
    
//       <header className="App-header">
    
//       <Mainbar></Mainbar>
//       <img src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-shoes-bags/subhome-xmedia-08//w/1728/IMAGE-large-landscape-b1c8fbe8-bf41-4aa7-bad0-794f0713c4b9-default_0.jpg?ts=1645713783552" alt="" />
// {/*      
//      <video loop autoPlay>
//         <source
//           src="https://github.com/talyaron/fullstack-fursa/blob/main/98-Private-projects/raneen/src/RPReplay_Final1645900869.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video> */}
      
 
//       {clothes.map((item1, index)=>{
//         const {name,price,img}= item1;
//         return <Card key={index} info ={{name,price,img} } />
//       })}
//         <TextInput />
//         <TextShow />
//         <Counter />
//       </header>
      
//     </div>
//   );
// }
// export default App;


function App() {
  return (
      <BrowserRouter>
    <Routes>
        {/* <Mainbar></Mainbar>  */}
        <Route path="/" element={<HomePage />}/>
       <Route path="SignUp" element={<SignUp />} /> 
       
        {/* <Route path="AboutUs" element={<AboutUs />} /> */}
        <Route path="HomePage" element={<HomePage /> }/>
       
    </Routes>
  </BrowserRouter>
    
//     <div>
//     <BrowserRouter>

//       <Routes>
//        {/* <Mainbar></Mainbar> */}
//         {/* <Route path="/" element={<HomePage />} />
//         <Route path="SignUp" element={<SignUp />} /> */}
       
//         {/* <Route path="AboutUs" element={<AboutUs />} /> */}
//         {/* <Route path="HomePage" element={<HomePage />} /> */}
//         {/* <Route path="Store" element={<Store />} > */}
//       </Routes>
//     </BrowserRouter>
// </div>
  
    
      
      // <img src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-shoes-bags/subhome-xmedia-08//w/1728/IMAGE-large-landscape-b1c8fbe8-bf41-4aa7-bad0-794f0713c4b9-default_0.jpg?ts=1645713783552" alt="" />
      
 
      // {clothes.map((item1, index)=>{
      //   const {name,price,img}= item1;
      //   return <Card key={index} info ={{name,price,img} } />
      // })}
  );
}

export default App;


// // function App() {
// //   return (
    
// //     <BrowserRouter>

// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         {/* <Route path="SignUp" element={<SignUp />} /> */}
// //         {/* <Route path="AboutUs" element={<AboutUs />} /> */}
// //         <Route path="HomePage" element={<HomePage />} />
//         {/* <Route path="Store" element={<Store />} >
//       </Routes>
//     </BrowserRouter>

  
    
//       <Mainbar></Mainbar>
//       <img src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-shoes-bags/subhome-xmedia-08//w/1728/IMAGE-large-landscape-b1c8fbe8-bf41-4aa7-bad0-794f0713c4b9-default_0.jpg?ts=1645713783552" alt="" />
      
 
//       {clothes.map((item1, index)=>{
//         const {name,price,img}= item1;
//         return <Card key={index} info ={{name,price,img} } />
//       })}
//   );
// }

// export default App;
