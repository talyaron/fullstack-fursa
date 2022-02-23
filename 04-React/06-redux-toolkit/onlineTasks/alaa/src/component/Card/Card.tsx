import React, { useState } from 'react'
import './card.scss';

import { changeText, select,selectData } from '../../features/cardReducer/cardReducer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';



function Card(props: any) {
    const { url, content } = props;
    const dispatch = useAppDispatch();
    const [urlSelected, setUrlSelected] = useState('');

    const text = useAppSelector(selectData);
    function handleChoosecard(ev: any) {
        ev.preventDefault();
        dispatch(select({url:url, title: content.title, data: content.data}));

    }


    return (
        <div className="cardContainer" onClick={handleChoosecard}>
            <div className="cardHeader">
                <img src={url} alt="" />
            </div>
            <div>
             {text}   
            </div>
        </div>
    )
}

export default Card