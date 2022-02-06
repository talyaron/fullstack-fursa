//You have a store of the things you like create an array of items.
//{name, price, id} the id should be unique to each product.
//create a function for sorting according to price or name (all functions are pure functions)
//create a function for a filter by price (from -> to)
//create a function a map function that converts all letters of a name to capital letters
//challenge:
//create a function with filter to delete an item by id
//create a function to update price with map, by id



interface cars{
    name:string;
    price:number;
    id :number;
}


const arr:Array<cars> = [
    {name:'lamborghini', price: 2000000, id :1},
    {name:'audi', price: 200000, id :2},
    {name:'merc', price: 300000, id :3},
    {name:'ferrari', price: 3000000, id :4},
    {name:'bmw', price: 100000, id :5},
    {name:'chevorleta', price: 150000, id :6},
    {name:'porsche', price: 500000, id :8}
    
]


function sortArrayOfCars(arr: Array<cars>, type: string): Array<cars> {
    const sortedArray = Object.assign([], arr);
    if (type == "price") {
        sortedArray.sort((a: cars, b: cars) => {
            return b.price - a.price;
        })
    }
    else {
        sortedArray.sort((a: cars, b: cars) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        })
    }
    return sortedArray;
}


function filterByPrice(arr: Array<cars>, fromPrice: number, toPrice: number): Array<cars> {
    const fitleredArray = arr.filter((a: cars) => {
        if (a.price >= fromPrice && a.price <= toPrice) return a;
    })
    return fitleredArray;
}



function nameToUpperClass(arr: Array<cars>): Array<cars> {
    const convertArray = arr.map((a: cars) => {
        const b = Object.assign({}, a)
        b.name = b.name.toUpperCase()
        return b;
    })
    return convertArray
}


function deleteItem(arr: Array<cars>, id: string): Array<cars> {
    const newArray = arr.filter((a: cars) => {
        if (a.id != id) return a;
    })
    return newArray;
}


function updatePrice(arr: Array<cars>, itemId: string, newPrice: number): Array<cars> {
    const updatedArray = arr.map((a: cars) => {
        const b = Object.assign({}, a)
        if (b.id == itemId) {
            b.price = newPrice;
        }
        return b;
    })
    return updatedArray;
}

console.log(sortArrayOfClothes(arrOfClothes, "price"))
console.log(sortArrayOfClothes(arrOfClothes, "name"))
console.log(filterByPrice(arrOfClothes, 65, 150));
console.log(nameToUpperClass(arrOfClothes))
console.log(deleteItem(arrOfClothes, "1"));
console.log(updatePrice(arrOfClothes, "5", 170));
