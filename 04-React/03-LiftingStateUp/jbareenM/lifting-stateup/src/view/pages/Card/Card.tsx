import './Card.scss';
import Item from '../../components/Item/Item';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { render } from '@testing-library/react';

interface myState {
    cardItems: any;
    setCardItems: React.Dispatch<React.SetStateAction<never[]>>;
}

function Card() {

    const {state}:any = useLocation();
    console.log(state.cardItems);

    // const { cardItems, setCardItems } = props;

    function handleRemove(ev: any) {
        ev.preventDefault();
        // state.setCardItems([state.cardItems[0]]);
    }

    return (
        <div className="cardContainer">
            {state.cardItems.map((item: any, index: any) => {
                return (
                    <div key={index}>
                        <label>{item.name}</label>
                        <label>{item.price}</label>
                        <button onClick={handleRemove}>remove</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;