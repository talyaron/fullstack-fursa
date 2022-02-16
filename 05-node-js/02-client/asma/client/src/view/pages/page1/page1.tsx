import {Link} from 'react-router-dom';
import ProductCard from './productCard'
import { ProductProps } from './productCard';

const products = [{ id: 1, name: 'Vitamin-D', img: 'https://img.mako.co.il/2016/03/14/shutterstock_59410978_i.jpg' ,setState:'',
state:'' },
{ id: 2, name: 'Chlorella', img: 'https://eatwell.co.il/wp-content/uploads/2017/12/Chlorella-eatwell-123.jpg',setState:'',
state:'' }, 
{ id: 3, name: 'Omega3', img: 'https://www.vitaplus.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%9E%D7%92%D7%94-3.jpg',setState:'',
state:''}
];


interface CardProp {
    setState:any;
    state:any;
    title:Array<Title>;
  }


interface Title {
    txt:string
  }
 // <h1>{title[0].txt}</h1> 
function Page1(prop: CardProp){
    const {title,setState,state} = prop;

    return(
        <div>
            {title.map((text: Title, i) => {
                return <h1>{text.txt}</h1> 
            })}  

            {products.map((product: ProductProps, i) => {
                return <ProductCard key={i} name={product.name} id={product.id} img={product.img} setState={setState} state={state} />
            })}     
            <Link to='/page2'>Go to Cart!</Link>
        </div>
    )
}

export default Page1;