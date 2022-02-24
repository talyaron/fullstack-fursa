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
                    <div className='product'>
                        <img src={elem.image} alt="" />
                        {elem.price}
                    </div>
                )
            })}
        </div>
    )
}

export default Shop