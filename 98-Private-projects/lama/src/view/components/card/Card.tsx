

// interface CardProp{
//     img:imag
//     title:string;
// }

// interface CardProp {
//     title: string;
//     place:string;
//   }

function Card(){
    return(
        <div className="card">
      
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz97sFA8bVy0qpoKmtnjhKFvvNDVvl7AjIRg&usqp=CAU" alt="" />
            <h2>Shoes</h2>
        </div>


/* <div className="card">
<h3>{prop.title}</h3>
<p>Lives in: {prop.place}</p>
</div> */
    );

}


export default Card;