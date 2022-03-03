import './Store.scss';
import Item from '../../components/Item/Item';
import { Link } from 'react-router-dom';

interface ItemsIF {
    name: string;
    price: number;
}

function Store(props: any) {
    const { cardItems, setCardItems, storeItems } = props;

    return (
        <div className="cardContainer">
            {storeItems.map((item: ItemsIF, index: number) => {
                return (
                    <Item key={index} info={item} cardItems={cardItems} setCardItems={setCardItems} />
                );
            })}
            <Link to="/card"><button>Cart</button></Link>
        </div>
    );
}

export default Store;