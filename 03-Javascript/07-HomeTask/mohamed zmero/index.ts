interface clothes {
    id: string;
    name: string;
    price: number;
}

const arrOfClothes: Array<clothes> = [
    { id: "1", name: "green T-shirt", price: 50 },
    { id: "2", name: "blue T-shirt", price: 70 },
    { id: "3", name: "red T-shirt", price: 60 },
    { id: "4", name: "black jeans", price: 300 },
    { id: "5", name: "blue jeans jacker", price: 150 },
    { id: "6", name: "white long-sleeved", price: 100 },
    { id: "7", name: "red dress", price: 250 },
    { id: "8", name: "blue sweater", price: 160 },
    { id: "9", name: "green scarf", price: 70 },
    { id: "10", name: "white socks", price: 30 },
]


function sortArrayOfClothes(arr: Array<clothes>, type: string): Array<clothes> {
    const sortedArray = Object.assign([], arr);
    if (type == "price") {
        sortedArray.sort((a: clothes, b: clothes) => {
            return b.price - a.price;
        })
    }
    else {
        sortedArray.sort((a: clothes, b: clothes) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        })
    }
    return sortedArray;
}
console.log("///// Sorted Array by Name and Price /////")
console.log(sortArrayOfClothes(arrOfClothes, "price"))
console.log(sortArrayOfClothes(arrOfClothes, "name"))

function filterByPrice(arr: Array<clothes>, fromPrice: number, toPrice: number): Array<clothes> {
    const fitleredArray = arr.filter((a: clothes) => {
        if (a.price >= fromPrice && a.price <= toPrice) return a;
    })
    return fitleredArray;
}

console.log("///// Array of prices with interval 65-150/////")
console.log(filterByPrice(arrOfClothes, 65, 150));

function nameToUpperClass(arr: Array<clothes>): Array<clothes> {
    const convertArray = arr.map((a: clothes) => {
        const b = Object.assign({}, a)
        b.name = b.name.toUpperCase()
        return b;
    })
    return convertArray
}

console.log("///// conver all name to uppercase/////")
console.log(nameToUpperClass(arrOfClothes))

function deleteItem(arr: Array<clothes>, id: string): Array<clothes> {
    const newArray = arr.filter((a: clothes) => {
        if (a.id != id) return a;
    })
    return newArray;
}
console.log("///// delete item with id 1 /////")
console.log(deleteItem(arrOfClothes, "1"));

function updatePrice(arr: Array<clothes>, itemId: string, newPrice: number): Array<clothes> {
    const updatedArray = arr.map((a: clothes) => {
        const b = Object.assign({}, a)
        if (b.id == itemId) {
            b.price = newPrice;
        }
        return b;
    })
    return updatedArray;
}
console.log("///// update price of item 5  to 170/////")
console.log(updatePrice(arrOfClothes, "5", 170));
