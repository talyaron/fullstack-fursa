import './vitamins.scss';
import ProductCard from './productCard'
import { ProductProps } from './productCard';
import { Outlet } from 'react-router-dom'


const products = [{ id: 1, name: 'Vitamin D', img: 'https://img.mako.co.il/2016/03/14/shutterstock_59410978_i.jpg' },
{ id: 2, name: 'Chlorella', img: 'https://eatwell.co.il/wp-content/uploads/2017/12/Chlorella-eatwell-123.jpg' }, 
{ id: 3, name: 'Omega3', img: 'https://www.vitaplus.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%9E%D7%92%D7%94-3.jpg' }
];

function Vitamins(){
    return(
        <div>
            <div className="vitamins">
                <h1>Vitamins and Supplements</h1>
                <div className="vitamins__product">
                    {products.map((product: ProductProps, i) => {
                        return <ProductCard key={i} name={product.name} id={product.id} img={product.img} />
                    })}
                </div>
                <Outlet></Outlet>
            </div >
        </div>
    )
}

export default Vitamins;