import {Link} from 'react-router-dom';
import "./page2.scss";


interface CardProp {
    setState:any;
    state:any;
}

interface Product{
    name: string;
    count: number;
    id: number;
  }

function Page2(prop: CardProp){
    const {setState,state} = prop;
    //console.log(prop.state)

    return(
        <div>
            <h1>Selected Products</h1>
            {state.map((product:Product) => {
                return  (<li><span>Product Name: </span>{product.name} <span> Amount: </span> {product.count} </li>)
            })}
            <Link to='/page1'>Click to go back to  products page!</Link>
        </div>
    )
}

export default Page2;