interface chocolate{
    id:number;
    name:string;
    price:number;
}

const chocolateArr:Array<chocolate>=[
    {id:1,name:'kinder',price:10},
    {id:2,name:'snickers',price:12},
    {id:3,name:'oreo',price:7},
    {id:4,name:'nutella',price:11},
    {id:5,name:'milka',price:15},
    {id:6,name:'pringles',price:5},
    {id:7,name:'bounty',price:20},
    {id:8,name:'galaxy',price:16},
    {id:9,name:'twix',price:13},
    {id:10,name:'ferrero',price:25}
]
//sort by price
function sortbyprice(chocolateArr:Array<chocolate>):Array<chocolate>
{
    const newArray = Object.assign([], chocolateArr);
    const sortByPrice:Array<chocolate>=newArray.sort((c1:chocolate,c2:chocolate)=>{
        return c1.price-c2.price;
    })
    return sortByPrice;
}




//sort by name
function sortbyname(chocolateArr:Array<chocolate>):Array<chocolate>{
    const newArray = Object.assign([], chocolateArr);

    const sortByName:Array<chocolate>=newArray.sort((c3:chocolate,c4:chocolate)=>{
        if(c3<c4){
            return 1;
            }
        else if(c3>c4){
            return -1;
        }
        else{return 0;}
    })
    return sortByName;
}

//function that converts all letters of a name to capital letters
function uppercase(chocolateArr:Array<chocolate>):Array<chocolate>{
 const uppercase:Array<chocolate>=chocolateArr.map((ch:chocolate)=>{
     const newobj=Object.assign({},ch);
     newobj.name=newobj.name.toUpperCase();
     return newobj;
 })
 return uppercase;
}
//function for a filter by price (from -> to)
function pricebetween(chocolateArr:Array<chocolate>,from:number,to:number):Array<chocolate>
{
    const newArray = Object.assign([], chocolateArr);
    const filterprice:Array<chocolate>=newArray.filter((ch:chocolate)=>{
     return ch.price>from&&ch.price<to;
 })
 return filterprice;
}



// function with filter to delete an item by id
function deletebyid(chocolateArr:Array<chocolate>,id:number):Array<chocolate>{
 const newArray = Object.assign([], chocolateArr);
 const filterbyid:Array<chocolate>=newArray.filter((ch:chocolate)=>{
     return ch.id!=id;
 })
 return filterbyid
}
//function to update price with map, by id
function updtaeprice(chocolateArr:Array<chocolate>,id:number,newprice):Array<chocolate>{
 const updatePrice:Array<chocolate>=chocolateArr.map((ch:chocolate)=>{
     const chobj=Object.assign({},ch);
     if (chobj.id==id){
         chobj.price=newprice;

     }
     return chobj;
      })
      return updatePrice;
    }

console.log("array sorted by price");
const ar:Array<chocolate>=sortbyprice(chocolateArr);
console.log(ar);
console.log("array sorted by name")
const ar2 :Array<chocolate>=sortbyname(chocolateArr);
console.log(ar2);
console.log("array with upper");
const ar3 :Array<chocolate>=uppercase(chocolateArr);
console.log(ar3);
console.log("array with price between")
const ar4 :Array<chocolate>=pricebetween(chocolateArr,10,20);
console.log(ar4);
console.log("array with delete by id");
const ar5:Array<chocolate>=deletebyid(chocolateArr,7)
console.log(ar5);
console.log("array with updated price")
const ar6:Array<chocolate>=updtaeprice(chocolateArr,7,30);
console.log(ar6);
console.log('orginal array');
console.log(chocolateArr);

