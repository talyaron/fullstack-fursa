import {Link} from 'react-router-dom';
import ProductCard from './productCard'


interface CardProp {
    setState:any;
    state:any;
}

function Page2(prop: CardProp){
    const {setState,state} = prop;
    //console.log(prop.state)

    return(
        <div>
            <h1>Selected Products</h1>
            <ProductCard setState={setState} state={state} />
            <Link to='/page1'>Go back to Store!</Link>
        </div>
    )
}

export default Page2;