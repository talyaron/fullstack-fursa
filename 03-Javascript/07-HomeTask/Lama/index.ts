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

const filterprice:Array<Item> = arr.filter((item:Item)=>{
    return item.price<100 && item.price>50;
})


const sortByPrice:Array<Item> = arr.sort((a:Item, b:Item)=>{
    return b.price - a.price;
})


const uppercase:Array<Item> = arr.map((item:Item)=>{
    const s=item.name.toUpperCase();
    item.name=s;
    return item;
})


const deleteitembyid:Array<Item> = arr.filter((item:Item)=>{
    const arr:Array<Item>=Object.assign([],item)
    const givenid=2;
    
    return item.id!=givenid;
})



console.log(filterprice);
console.log(sortByPrice);
console.log(uppercase);
console.log(deleteitembyid);