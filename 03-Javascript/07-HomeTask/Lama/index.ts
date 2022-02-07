interface Item{
    name:string;
    price:number;
    id:any;
}

const arr:Array<Item> = [
    {name:'t-shirt',price:50, id:1},
    {name:'jacket',price:150, id:2},
    {name:'short',price:80, id:3},
    {name:'shirt',price:40, id:4}
];


arr.forEach((item:Item)=>{
    console.log(item)
})

// const filterprice:Array<Item> = arr.filter((item:Item)=>{
//     return item.price<100 && item.price>50;
// })

function filterprice(arr:Array<Item>){
    const filteredArr = Object.assign([], arr);
    const filterByPrice:Array<Item> = filteredArr.filter((item:Product)=>item.price<100 && item.price>50);
    return filterByPrice ;
  }


// const sortByPrice:Array<Item> = arr.sort((a:Item, b:Item)=>{
//     return b.price - a.price;
// })

function sortByPrice(arr:Array<Item>){
    const sortedArr = Object.assign([], arr);
    const sortByPrice:Array<Item> = sortedArr.sort((a:Item, b:Item)=>b.price - a.price);
    return sortByPrice ;
  } 


const uppercase:Array<Item> = arr.map((item:Item)=>{
    const s=item.name.toUpperCase();
    item.name=s;
    return item;
})

function Touppercase(arr:Array<Item>){
    const uppercaseArr = Object.assign([], arr);
    const Touppercase:Array<Product> = uppercaseArr.map((item:Item)=>{
        const s=item.name.toUpperCase();
        item.name=s;
        return item;
    });
    return Touppercase ;
  }

  function deleteitembyid(arr:Array<Item>){
    const newArr = Object.assign([], arr);
    const givenid=2;
    const deleteitembyid:Array<Item> = newArr.filter((item:Item)=>{
        return item.id!=givenid;
    });
    return deleteitembyid ;
  }
  


// const deleteitembyid:Array<Item> = arr.filter((item:Item)=>{
//     const arr:Array<Item>=Object.assign([],item)
//     const givenid=2;
    
//     return item.id!=givenid;
// })



console.log(filterprice(arr));
console.log(sortByPrice(arr));
console.log(uppercase);
console.log(Touppercase(arr));
console.log(deleteitembyid(arr));