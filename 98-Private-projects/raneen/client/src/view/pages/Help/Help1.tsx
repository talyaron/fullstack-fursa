import react from "react";
import "./Help1.scss";
import { Link } from "react-router-dom";

// function hanleHelpUpdate(props:any){
//   console.log(props);
// }

//const FooBar = () => <Button value="WOOSAH" onClick={handleClick} />;

function Help1() {


const id =2;

 function handleDelete(id:any){
  
   console.log(id);
} 
  return (
    <div className="wrapper">

      <div>
       
       <button  onClick={() => handleDelete(id)}> <img
src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-registered-user.svg?ts=1550654368093"          alt=""
        />
        <p>YOUR ZARA ACCOUNT</p>
       </button>
      </div>
      
      <div>
        <img
src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-order-settings.svg?ts=1550654368093"          alt=""
        />
        <p>ORDER MODIFICATIONS</p>
      </div>
      <div>

      <img
src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-bag.svg?ts=1550654368093"        alt=""
      />
        <p>SHOPPING BASKET</p>
      </div>
      <div>
      <img
        src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-wishlist.svg?ts=1550654368093"
        alt=""
      />
        <p>WISHLIST</p>
      </div>
      <div>
      <img
src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-changes-in-price.svg?ts=1550654368093"        alt=""
      />
        <p>PRICE CHANGES</p>
      </div>

      
     <div>
      <img
src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-newsletter.svg?ts=1550654368093"        alt=""
      />
    <p>NEWSLETTER</p>
      </div>
    </div>
  );
}

export default Help1;
