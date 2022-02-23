import React from 'react'

export interface ProductProps {
    name: string;
    id: number;
    img: string;
    cartItems: any;
    setcartItems: any;
}

export default function CartItem(props: ProductProps) {
    const { name, id, img } = props;
    const { cartItems, setcartItems } = props;
    function remove_item() {
        let copy = Object.assign([], cartItems);
        setcartItems(copy.filter((element: any) => {
            if (element.id != id)
                return element
        }))
    }
    return (
        <div className="card">
            <img src={img}></img>
            <span className="card__Title">{name}</span>
            <button onClick={remove_item}>remove</button>
        </div>
    )
}
