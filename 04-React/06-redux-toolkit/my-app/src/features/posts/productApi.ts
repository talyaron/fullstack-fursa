import { productInfo } from "./productSlice";

export function getProduct():Promise<productInfo>{
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then((value) => {
            console.log(value);
            if(typeof value === 'object'){
                resolve(value)}
            else {
                console.log(value)
                reject(new Error('joke is not a string'))
            }
        })
        .catch(err=>reject(err))
    })
}