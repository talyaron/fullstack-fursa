interface product{
    name : string;
    price : number;
    id : string;
}

const shop:Array<product> = [
    {name:"shoes", price:150, id:"1"},
    {name:"t-shirt", price:100, id:"2"},
    {name:"jeans", price:130, id:"3"},
    {name:"shirt", price:160, id:"4"},
    {name:"coat", price:400, id:"5"},
    {name:"dress", price:350, id:"6"},
    {name:"hoodies", price:200, id:"7"},
    {name:"jumpsuits", price:250, id:"8"},
    {name:"skirt", price:200, id:"9"}
];

// function for sorting array by price

function sortByPrice(arr:Array<product>):Array<product>{
    const newArr:Array<product> = Object.assign([], arr);
    newArr.sort((pro1:product, pro2:product) => {
        return pro1.price - pro2.price;
    })
    return newArr;
}

console.log("The array sorted by price", sortByPrice(shop));

// function for sorting array by name

function sortByName(arr:Array<product>):Array<product>{
    const newArr:Array<product> = Object.assign([], arr);
    newArr.sort((pro1:product, pro2:product) => {
        if(pro1.name > pro2.name){
            return 1;
        }
        if(pro1.name < pro2.name){
            return -1;
        }
        return 0;
    })
    return newArr;
}

console.log("The array sorted by name", sortByName(shop));


// function for filter the array from price1 to price2

function filterPrice(arr:Array<product>, fromPrice:number, toPrice:number):Array<product>{
    let newArr:Array<product> = Object.assign([], arr);
    newArr = newArr.filter((pro:product) => {
        if(pro.price >= fromPrice && pro.price <= toPrice){
            return pro;
        }
    })
    return newArr;
}

console.log("The array filtered by price from 150 to 300", filterPrice(shop, 150, 300));


// mapping the name to capital letters

function toCapital(arr:Array<product>):Array<product>{
    let newArr:Array<product> = Object.assign([], arr);
    newArr = arr.map((pro:product) => {
        const newPro = Object.assign({}, pro);
        newPro.name = newPro.name.toUpperCase();
        return newPro;
    })
    return newArr;
}

console.log("convert all the names to Uppercase", toCapital(shop));


// function to delete a product

function DeleteProduct(arr:Array<product>, id:string):Array<product>{
    let newArr:Array<product> = Object.assign([], arr);
    newArr = newArr.filter((pro:product) => {
        if(pro.id != id){
            return pro;
        }
    })
    return newArr;
}

console.log("The array after deleting a product with id=7", DeleteProduct(shop, "7"));


// function to update price

function updatePrice(arr:Array<product>, newPrice:number, id:string):Array<product>{
    let newArr:Array<product> = Object.assign([], arr);
    newArr = newArr.map((pro:product) => {
        if(pro.id == id){
            const newPro = Object.assign({}, pro);
            newPro.price = newPrice;
            return newPro;
        }
        else return pro;
    })
    return newArr;
}

console.log("The array after update the price of the product with id=4 to 120", updatePrice(shop, 120, "4"));

