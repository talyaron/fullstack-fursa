interface Item {
    id: number;
    price: number;
    name: string;
}

const items: Array<Item> = [
    { id: 1, price: 50, name: "shirt" },
    { id: 2, price: 20, name: "pants" },
    { id: 3, price: 30, name: "jacket" },
    { id: 4, price: 40, name: "pants 1" },
];

function sortByPriceOrName(items: Array<Item>, sortBy: string): Array<Item> {
    const copyItems = Object.assign([], items);
    if (sortBy === "name") {
        const sortedItems: Array<Item> = copyItems.sort((first: Item, second: Item) => {
            if (first.name > second.name) return 1;
            else if (first.name < second.name) return -1;
            return 0;
        });
        return sortedItems;
    }
    const sortedItems: Array<Item> = copyItems.sort((first: Item, second: Item) => {
        return first.price - second.price;
    });
    return sortedItems;
}

function sortByName(items: Array<Item>): Array<Item> {
    const copyItems: Array<Item> = Object.assign([], items);
    const sortByName: Array<Item> = copyItems.sort((first: Item, second: Item) => {
        if (first.name > second.name) return 1;
        else if (first.name < second.name) return -1;
        return 0;
    })
    return sortByName;
}

function sortByPrice(items: Array<Item>, direction:number): Array<Item> {
    const copyItems = Object.assign([], items);
    const sortedItems: Array<Item> = copyItems.sort((first: Item, second: Item) => {
        if(direction == 1) return first.price - second.price;
        return second.price - first.price;
    });
    return sortedItems;
}

function filterByPrice(items: Array<Item>, from: number, to: number): Array<Item> {
    const copyItems: Array<Item> = Object.assign([], items);
    const filteredByPrice: Array<Item> = copyItems.filter((item: Item) => {
        return item.price >= from && item.price <= to;
    });
    return filteredByPrice;
}

function converToUpperCase(items: Array<Item>): Array<Item> {
    const copyItems: Array<Item> = Object.assign([], items);
    const upperCaseItems: Array<Item> = copyItems.map((item: Item) => {
        return {...item, name: item.name.toUpperCase()};
    })
    return upperCaseItems;
}


//--------------Challenge---------------

function deleteById(items:Array<Item>, id:number):Array<Item>{
    const copyItems:Array<Item> = Object.assign([], items);
    const deletedId:Array<Item> = copyItems.filter((item:Item) => {
        return item.id !== id; 
    })
    return deletedId;
}

function updatePrice(items: Array<Item>, newPrice:number, id:number): Array<Item> {
    const copyItems: Array<Item> = Object.assign([], items);
    const upperCaseItems: Array<Item> = copyItems.map((item: Item) => {
        if(item.id === id)
            return {...item, price: item.price = newPrice};
        return {...item}
    })
    return upperCaseItems;
}

console.log("sortByPriceOrName name:", sortByPriceOrName(items, "name"));
console.log("sortByPriceOrName price:", sortByPriceOrName(items, "price"));
console.log("sortByName:", sortByName(items));
console.log("sortByPrice small to great", sortByPrice(items, 1));
console.log("sortByPrice great to small", sortByPrice(items, -1));
console.log("filterByPrice:", filterByPrice(items, 10, 30));
console.log("converToUpperCase:", converToUpperCase(items));
console.log("--------------Challenge---------------");
console.log("deleteById:", deleteById(items, 2));
console.log("updatePrice:", updatePrice(items, 200, 2));
console.log(items);