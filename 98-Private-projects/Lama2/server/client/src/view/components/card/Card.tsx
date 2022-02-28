

// interface CardProp{
//     img:imag
//     title:string;
// }

// interface CardProp {
//     title: string;
//     place:string;
//   }
import './Card.scss';

interface CardProp {
    info:{
    name:string;
    age:number;
    img:string;
    }
  }


function Card(prop:CardProp){
    const {name,age,img}=prop.info;
    return(
        <div className="card">
        <img src={img} alt="" />
      

        <p>name is :{name} </p>
     
        <p>age is: {age}</p>
      
        {/* <p>{name}</p> */}
         
  
        {/* <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz97sFA8bVy0qpoKmtnjhKFvvNDVvl7AjIRg&usqp=CAU" alt="" />
        <h2>Shoes</h2> */}
    </div>


/* <div className="card">
<h3>{prop.title}</h3>
<p>Lives in: {prop.place}</p>
</div> */
    );

}


export default Card;