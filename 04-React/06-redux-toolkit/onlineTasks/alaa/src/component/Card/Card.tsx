import React, { useState } from 'react'
import './card.scss';

import { changeText, select,selectData } from '../../features/cardReducer/cardReducer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getProductAsync } from '../../features/productsReducer/products';



function Card(props: any) {
    const { url, content } = props;
    const dispatch = useAppDispatch();
    const [urlSelected, setUrlSelected] = useState('');

    const text = useAppSelector(selectData);
    function handleChoosecard(ev: any) {
        ev.preventDefault();
        dispatch(select({url:url, title: content.title, data: content.data}));

    }
    
    function handleGetProducts() {
        dispatch(getProductAsync());
    }
    

    return (
        <div className="cardContainer" onClick={handleChoosecard}>
            <div className="cardHeader">
                <img src={url} alt="" />
            </div>
            <div>
             {text}   
            </div>
            <div>
                <button onClick={handleGetProducts}>getProduct</button>
            </div>
        </div>
    )
}

export default Card