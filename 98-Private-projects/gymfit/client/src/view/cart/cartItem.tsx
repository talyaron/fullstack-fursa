import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
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
        alert(props.name + " have been removed  from the cart");
    }
    return (
      <div className="card">
        <img src={img}></img>
        <span className="card__Title">{name}</span>
        <Button
          sx={{ fontSize: 18 }}
          onClick={remove_item}
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          Remove from cart
        </Button>
      </div>
    );
}
