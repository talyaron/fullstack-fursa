import {Link} from 'react-router-dom';


interface CardProp {
    setState:any;
    state:any;
  }

function Page2(prop: CardProp){
    const {setState,state} = prop;
    console.log(prop.state)

    return(
        <div>
            <h1>Selected Products</h1>
            {state.map((product: string) => {
                return  (<li>{product} </li>)
            })}
            <Link to='/page1'>Click to go to page1!</Link>
        </div>
    )
}

export default Page2;