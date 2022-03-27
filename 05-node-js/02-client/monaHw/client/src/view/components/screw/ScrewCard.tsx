import { Button } from "@mui/material";

export interface CardProp {
    screw: {
      name: string,
      price: number
    };
  }
function ScrewCard(props:CardProp){
const {name,price}=props.screw;

return(
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <Button>order</Button>
    </div>
)
}

export default ScrewCard;