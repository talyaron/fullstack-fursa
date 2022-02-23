import {Link} from 'react-router-dom';
import React from 'react';
import "./productCard.scss";
import {select} from '../../../features/treatment/treatmentSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';


export interface ProductProps {
    name: string;
    //id: number;
    img: string;
   // text: string;
}

function ProductCard(props: ProductProps){
    const { name,img } = props;
    const dispatch = useAppDispatch();
    
    function handleClick(ev: any) {
    const pic = ev.target.src;
    dispatch(select(pic));
  }
    
    
    return(
        <div className="card">
            <div className="card__item">
                <img src={img} onClick={handleClick} ></img>
                <span className="card__item__title">{name}</span>
            </div>
        </div>

    )
}

export default ProductCard;