import './Item.scss';

function Item(props: any) {
    const { info, cardItems, setCardItems } = props;
    
    function handleSubmit(ev: any) {
        ev.preventDefault();
        console.log(info);
        const copyCardItems = [... cardItems, info];
        setCardItems(copyCardItems);
    }

    return (
        <form onSubmit={handleSubmit} className="item">
            <label>{info.name}</label>
            <label>{info.price}</label>
            <input type="submit" value="add to cart" />
        </form>
    );
}

export default Item;