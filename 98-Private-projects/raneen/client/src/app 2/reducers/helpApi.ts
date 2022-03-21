export function getJoke(ev: any):Promise<string>{
    return new Promise((resolve, reject)=>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res=>res.json())
        .then(({value})=>{
            if(typeof value === 'string'){
                resolve(value)}
            else {
                console.log(value)
                reject(new Error('joke is not a string'))
            }
        })
        .catch(err=>reject(err))
    })
}
