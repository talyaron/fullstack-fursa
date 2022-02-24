import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ProductState, SelectShop, ShopFetchAsync } from '../../features/storeSelector/storeReducer'
import './Shop.scss';

function Shop() {
    const shop = useAppSelector(state => state.shop);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(ShopFetchAsync());
    }, [])

    return (
        <div className='shopContainer'>
            {shop.value.map((elem: ProductState, index: number) => {
                return (
                    <div className="product">
                        <div className="productHeader">
                            {elem.image !== "" ?
                                <img src={elem.image} alt="" />
                                : <label>there is no selected image</label>}
                        </div>
                        <div className="productContent">
                            <div className="productTitle">{elem.title}</div>
                            <div className="productPrice">{elem.price}$</div>
                            <div className="productData">{elem.description}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop