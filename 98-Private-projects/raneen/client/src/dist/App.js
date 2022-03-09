"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.scss");
require("./App.scss");
var menu_1 = require("./view/components/menu/menu");
var react_router_dom_1 = require("react-router-dom");
var homePage_1 = require("./view/pages/homePage/homePage");
var Store_1 = require("./view/pages/Store/Store");
var Help_1 = require("./view/pages/Help/Help");
var Help1_1 = require("./view/pages/Help/Help1");
var SignUp_1 = require("./view/pages/SignUp/SignUp");
var SignIn_1 = require("./view/pages/SignIn/SignIn");
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
    //const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(homePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Store/:coatsId", element: react_1["default"].createElement(Store_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Store/:jacketsId", element: react_1["default"].createElement(Store_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Store/:pantsId", element: react_1["default"].createElement(Store_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "SignUp", element: react_1["default"].createElement(SignUp_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "SignIn", element: react_1["default"].createElement(SignIn_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Help", element: react_1["default"].createElement(Help_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Help1", element: react_1["default"].createElement(Help1_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "HomePage", element: react_1["default"].createElement(homePage_1["default"], null) })))
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
exports["default"] = App;
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
