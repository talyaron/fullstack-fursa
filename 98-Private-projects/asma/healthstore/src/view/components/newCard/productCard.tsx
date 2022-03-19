import {Link} from 'react-router-dom';
import React from 'react';
import "./productCard.scss";

//components
//import Nav from '../../components/nav/Nav'

export interface ProductProps {
    name: string;
    id: number;
    //img: string;
   // text: string;
}

function newCard(props: ProductProps){
    const { name, id } = props;
    return(
        <div className="card">
        
            <div className="card__item">
                <span className="card__item__title">{name}</span>
            </div>
      
        </div>

    )
}

export default newCard;