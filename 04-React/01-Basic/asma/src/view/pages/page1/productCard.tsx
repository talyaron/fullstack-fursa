import {Link} from 'react-router-dom';
import React from 'react';
import "./productCard.scss";


export interface ProductProps {
    setState:any;
    state:any;
    name: string;
    id: number;
    img: string;
 
}


function ProductCard(props: ProductProps){
    function handleAdd() {
        const tmp =name;
        console.log(state);
        setState([...state,tmp]);
       }
    const { name, id, img ,state,setState} = props;
    return(
        <div className="card">
            <div className="card__item">
                <img src={img}></img>
                <span className="card__item__title">{name}</span>
                <button onClick={handleAdd}>Add Item to page2 </button>
            </div>
        </div>

    )
}

export default ProductCard;