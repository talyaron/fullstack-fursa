import './Card.scss';
import { Link } from 'react-router-dom';

interface ItemsIF {
    name: string;
    price: number;
  }

function Card(props: any) {
    const { cardItems, setCardItems } = props;

    function handleRemove(ev: any, item: ItemsIF) {
        ev.preventDefault();
        const copyItems: Array<ItemsIF> = Object.assign([], cardItems);
        const filtered: Array<ItemsIF> = copyItems.filter((card: ItemsIF) => {
            return card !== item;
        });
        setCardItems(filtered);
    }

    return (
        <div className="cardContainer">
            {cardItems.map((item: ItemsIF, index: number) => {
                return (
                    <form key={index} onSubmit={(ev: any) => handleRemove(ev, item)}>
                        <label>{item.name}</label>
                        <label>{item.price}</label>
                        <input type="submit" value="remove from cart" />
                    </form>
                );
            })}

            <Link to='/store'><button>store</button></Link>
        </div>
    );
}

export default Card;