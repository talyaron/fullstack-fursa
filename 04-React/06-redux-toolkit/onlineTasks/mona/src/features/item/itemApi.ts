import {product} from './itemSlice'
export function getProduct():Promise<product>{
    return new Promise((resolve, reject)=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>console.log(json))
})
}