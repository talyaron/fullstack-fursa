export function getProduct(): Promise<any> {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then((value) => {
                console.log(value)
                resolve(value)
            })
            .catch(err => reject(err))
    })
}
