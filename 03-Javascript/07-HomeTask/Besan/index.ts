interface items{
    name:string
    id:number
    price:number;

} 

function sortBy(arr:Array<items>, sortby: string): Array<items>
{
    const myArray = Object.assign([], arr);
    if (sortby=="Price"){
        myArray.sort((a: items, b: items) => a.price - b.price);
    }
    else if (sortby == "Name"){
        myArray.sort((a: items, b: items )=> {
            if ( a.name < b.name ){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
        })

    }


    return myArray
}



const arr:Array<items>=[
    {name: 'Guitar', id: 1, price: 800 } , {name: 'Piano', id: 2, price: 15000 }, 
    {name: 'Elec-Guitar', id: 3, price: 3000 }, {name: 'Cello', id: 4, price: 9000 }
    {name: 'Violin ', id: 5, price: 5000}
    {name: 'Accoustic-guitar', id: 6, price: 1800}
];


console.log("My Array")
console.log(arr)
console.log("Sort by Name")
console.log(sortBy(arr,'Name'))
// sort by Price
console.log("Sort by Price")
console.log(sortBy(arr,'Price'))

function SortByRange(arr:Array<items>, a: number, b: number): Array<items>
{
    const myArray = Object.assign([], arr);
    const temparr:Array<items>=[]

    for(let key in myArray){

        if (myArray[key].price>= a && myArray[key].price<= b){
            temparr.push(myArray[key])
        }
        
    }
    return temparr
}

console.log("Print Items that Price's Range between 500-6000")
console.log(SortByRange(arr, 500,6000))

function UpperL(arr:Array<items>): Array<items>
{
    const myArray = Object.assign([], arr);
    for(let key in myArray){

       /* let temp=myArray[key].name
        temp=temp.toUpperCase()
        myArray[key].name=temp*/

        myArray[key].name=myArray[key].name.toUpperCase()
        
    }


    return myArray

}

console.log("UpperCase Names")
console.log(UpperL(arr))


function DeleteByID(arr:Array<items>, ID: number): Array<items>
{
    const myArray = Object.assign([], arr);
    for(let key=0; key<myArray.length; key++){
        if (myArray[key].id==ID){
           myArray.splice(key,1)
        }
    }

    return myArray
    
}

console.log("Delete By ID=5")
console.log(DeleteByID(arr, 5))

