import './cosmetics.scss';
import ProductCard from './productCard'
import { ProductProps } from './productCard';
import { Outlet } from 'react-router-dom'


const products = [{ id: 1, name: 'Organic-Cosmetics', img: 'https://static.manna.global/img/cms/uk/980/5170-how-much-do-you-know-about-natural-cosmetics-152004.png' },
{ id: 2, name: 'Handmade-Cosmetics', img: 'https://previews.123rf.com/images/vchalup/vchalup1702/vchalup170200163/73392103-skincare-concept-woman-is-preparing-homemade-cosmetics-or-makeup-.jpg' }, 
{ id: 3, name: 'Mud-Masks', img: 'https://thumbs.dreamstime.com/b/preparing-cosmetic-mud-mask-aloe-vera-lavender-essential-oil-facial-clay-spa-products-stones-natural-cosmetics-home-137897112.jpg' }
];

function Cosmetics(){
    return(
        <div>
            <div className="cosmetics">
                <h1>Cosmetics</h1>
                <div className="cosmetics__product">
                    {products.map((product: ProductProps, i) => {
                        return <ProductCard key={i} name={product.name} id={product.id} img={product.img} />
                    })}
                </div>
                <Outlet></Outlet>
            </div >
        </div>
    )
}

export default Cosmetics;