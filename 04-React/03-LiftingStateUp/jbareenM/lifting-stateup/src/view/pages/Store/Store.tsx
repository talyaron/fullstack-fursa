import './Store.scss';
import Item from '../../components/Item/Item';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Card from '../Card/Card';

interface myState {
    cardItems: any;
    // setCardItems: React.Dispatch<React.SetStateAction<never[]>>;
}

function Store() {
    const nav = useNavigate();

    const [storeItems, setStoreItems] = useState([
        { name: "a", price: 10 },
        { name: "b", price: 10 },
        { name: "c", price: 10 },
        { name: "d", price: 10 },
    ]);

    const [cardItems, setCardItems] = useState([]);

    function handleCart(ev: any) {
        ev.preventDefault();
        // <Route path='/card'>
        //     <Card cardItems={cardItems} setCardItems={setCardItems} />
        // </Route>
        const myState:myState = {
            cardItems: cardItems,
            // setCardItems: setCardItems
        };

        nav('/card', {
            state: myState
        });
    }

    return (
        <div className="cardContainer">
            {storeItems.map((item, index) => {
                return (
                    <Item key={index} info={item} cardItems={cardItems} setCardItems={setCardItems} />
                );
            })}

            <button onClick={handleCart}>Cart</button>
        </div>
    );
}

export default Store;