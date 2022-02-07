interface Food {
    name: string
    price: number
    id: number
}


const FoodArr: Array<Food> =
    [
        { name: "Fish", price: 200, id: 1 },
        { name: "Chicken", price: 100, id: 2 },
        { name: "Pizza", price: 50, id: 3 },
        { name: "Sushi", price: 130, id: 4 },
        { name: "Hamburger", price: 300, id: 5 },
        { name: "Salad", price: 120, id: 6 },
        { name: "Lasanga", price: 150, id: 7 }
    ]

function priceSort(foods: Array<Food>, type: string): Array<Food> {
    const newArr = Object.assign([], foods);
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




function FilterByPrice(foods: Array<Food>, from: number, to: number): Array<Food> {
    const FilterArr = foods.filter((a: Food) => {
        if (a.price >= from && a.price <= to)
            return a;
    })
    return FilterArr;
}

function ToUpperCaseNames(foods: Array<Food>) {
    const uppercased = foods.map((a: Food) => {
        a.name = a.name.toUpperCase();
        return a;
    })
    return uppercased;
}


function DeleteItemById(foods: Array<Food>, id: number) {
    const Deleted = foods.map((a: Food) => {
        if (a.id != id)
            return a;
    })
    return Deleted;
}


function UpdateNewPrice(foods: Array<Food>, id: number , NewPrice : number) {
    const NewArr = foods.map((a: Food) => {
        if (a.id == id)
            a.price = NewPrice;
            return a
    })
    return NewArr;
}

console.log("Sorting the Food by thier price")
console.log(priceSort(FoodArr, "price"))
console.log("Sorting the Food by thier name")
console.log(priceSort(FoodArr, "name"))
console.log("Sorting the prices in range 200 and 700")
console.log(FilterByPrice(FoodArr, 200, 700))
console.log("Names to uppercase")
console.log(ToUpperCaseNames(FoodArr))
console.log("Delete item with id equals to 5")
console.log(DeleteItemById(FoodArr, 5))
console.log("update the price of id 3 to 400")
console.log(UpdateNewPrice(FoodArr, 3 , 400))