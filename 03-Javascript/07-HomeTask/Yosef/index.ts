interface Food {
    name: string
    price: number
    id: number
}


const CarArr: Array<Cars> =
    [
        { name: "Fish", price: 200, id: 1 },
        { name: "Chicken", price: 100, id: 2 },
        { name: "Pizza", price: 50, id: 3 },
        { name: "Sushi", price: 130, id: 4 },
        { name: "Hamburger", price: 300, id: 5 },
        { name: "Salad", price: 120, id: 6 },
        { name: "Lasanga", price: 150, id: 7 }
    ]

function SortByType(arr: Array<Food>, type: string): Array<Food> {
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

console.log("Sorting the Food by thier price")
console.log(SortByType(CarArr, "price"))
console.log("Sorting the Food by thier name")
console.log(SortByType(CarArr, "name"))


function FilterByPrice(arr: Array<Food>, from: number, to: number): Array<Food> {
    const FilterArr = arr.filter((a: Food) => {
        if (a.price >= from && a.price <= to)
            return a;
    })
    return FilterArr;
}

console.log("Sorting the prices in range 200 and 700")
console.log(FilterByPrice(CarArr, 200, 700))

function ToUpperCaseNames(arr: Array<Food>) {
    const uppercased = arr.map((a: Food) => {
        a.name = a.name.toUpperCase();
        return a;
    })
    return uppercased;
}

console.log("Names to uppercase")
console.log(ToUpperCaseNames(CarArr))

function DeleteItemById(arr: Array<Food>, id: number) {
    const Deleted = arr.map((a: Food) => {
        if (a.id != id)
            return a;
    })
    return Deleted;
}

console.log("Delete item with id equals to 5")
console.log(DeleteItemById(CarArr, 5))

function UpdateNewPrice(arr: Array<Food>, id: number , NewPrice : number) {
    const NewArr = arr.map((a: Food) => {
        if (a.id == id)
            a.price = NewPrice;
            return a
    })
    return NewArr;
}

console.log("update the price of id 3 to 400")
console.log(UpdateNewPrice(CarArr, 3 , 400))