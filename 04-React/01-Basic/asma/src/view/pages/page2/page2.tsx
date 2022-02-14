import {Link} from 'react-router-dom';


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
                return  (<li>{product.name} {product.count} </li>)
            })}
            <Link to='/page1'>Click to go to page1!</Link>
        </div>
    )
}

export default Page2;