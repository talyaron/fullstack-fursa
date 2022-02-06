interface Cars {
    name: string
    price: number
    id: number
}


const CarArr: Array<Cars> =
    [
        { name: "Volvo", price: 200, id: 1 },
        { name: "BMW", price: 1000, id: 2 },
        { name: "KIA", price: 500, id: 3 },
        { name: "Mercedes", price: 1200, id: 4 },
        { name: "Mazda", price: 600, id: 5 },
        { name: "Mitsubishi", price: 100, id: 6 },
        { name: "Tesla", price: 1500, id: 7 }
    ]

function SortByType(arr: Array<Cars>, type: string): Array<Cars> {
    const newArr = Object.assign([], arr);
    if (type == "price") {
        newArr.sort((a, b) => {
            return a.price - b.price;
        });
    }
    else {
        newArr.sort(function (a, b) {
            return ('' + a.name).localeCompare(b.name);
        })
    }

    return newArr;
}

console.log("Sorting the cars by thier price")
console.log(SortByType(CarArr, "price"))
console.log("Sorting the cars by thier name")
console.log(SortByType(CarArr, "name"))


function FilterByPrice(arr: Array<Cars>, from: number, to: number): Array<Cars> {
    const FilterArr = arr.filter((a: Cars) => {
        if (a.price >= from && a.price <= to)
            return a;
    })
    return FilterArr;
}

console.log("Sorting the prices in range 200 and 700")
console.log(FilterByPrice(CarArr, 200, 700))

function ToUpperCaseNames(arr: Array<Cars>) {
    const uppercased = arr.map((a: Cars) => {
        a.name = a.name.toUpperCase();
        return a;
    })
    return uppercased;
}

console.log("Names to uppercase")
console.log(ToUpperCaseNames(CarArr))

function DeleteItemById(arr: Array<Cars>, id: number) {
    const Deleted = arr.map((a: Cars) => {
        if (a.id != id)
            return a;
    })
    return Deleted;
}

console.log("Delete item with id equals to 5")
console.log(DeleteItemById(CarArr, 5))

function UpdateNewPrice(arr: Array<Cars>, id: number , NewPrice : number) {
    const NewArr = arr.map((a: Cars) => {
        if (a.id == id)
            a.price = NewPrice;
            return a
    })
    return NewArr;
}

console.log("update the price of id 3 to 400")
console.log(UpdateNewPrice(CarArr, 3 , 400))