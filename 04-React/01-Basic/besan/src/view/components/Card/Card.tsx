/*function card(){
    return (
        <div className="card">
            <h3> Card Title</h3>
            <p>This is a Card</p>
        </div>
    );
}*/

import {useState} from 'react'

interface CardProp {
    name: string;
    HrbMed: string;
    Price: number;
    img:string;
    };
  

  function Card(prop: CardProp) {

    
    const [counter, setCounter]=useState(0)
    const[color, setColor] =useState('blue')


    function handleCounter(event:any){
            setCounter(counter+1)
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const newColor = "#" + randomColor;
            setColor(newColor);
        }
      return ( 
          <div className="card">
          <img src={prop.img} alt={prop.HrbMed} />
          <h3> {prop.HrbMed}</h3>
          <p> Treats {prop.name}, Price is {prop.Price}$</p>
          <button style={{backgroundColor: color}} onClick={handleCounter}> add to Cart </button>
            <div style={{backgroundColor:color }}>{counter}</div>

          
          </div>
      );  
    }


  export default Card;
