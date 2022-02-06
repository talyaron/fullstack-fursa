var shop = [
    { name: "shoes", price: 150, id: "1" },
    { name: "t-shirt", price: 100, id: "2" },
    { name: "jeans", price: 130, id: "3" },
    { name: "shirt", price: 160, id: "4" },
    { name: "coat", price: 400, id: "5" },
    { name: "dress", price: 350, id: "6" },
    { name: "hoodies", price: 200, id: "7" },
    { name: "jumpsuits", price: 250, id: "8" },
    { name: "skirt", price: 200, id: "9" }
];
// function for sorting array by price
function sortByPrice(arr) {
    var newArr = Object.assign([], arr);
    newArr.sort(function (pro1, pro2) {
        return pro1.price - pro2.price;
    });
    return newArr;
}
console.log("The array sorted by price", sortByPrice(shop));
// function for sorting array by name
function sortByName(arr) {
    var newArr = Object.assign([], arr);
    newArr.sort(function (pro1, pro2) {
        if (pro1.name > pro2.name) {
            return 1;
        }
        if (pro1.name < pro2.name) {
            return -1;
        }
        return 0;
    });
    return newArr;
}
console.log("The array sorted by name", sortByName(shop));
// function for filter the array from price1 to price2
function filterPrice(arr, fromPrice, toPrice) {
    var newArr = Object.assign([], arr);
    newArr = newArr.filter(function (pro) {
        if (pro.price >= fromPrice && pro.price <= toPrice) {
            return pro;
        }
    });
    return newArr;
}
console.log("The array filtered by price from 150 to 300", filterPrice(shop, 150, 300));
// mapping the name to capital letters
function toCapital(arr) {
    var newArr = Object.assign([], arr);
    newArr = arr.map(function (pro) {
        var newPro = Object.assign({}, pro);
        newPro.name = newPro.name.toUpperCase();
        return newPro;
    });
    return newArr;
}
console.log("convert all the names to Uppercase", toCapital(shop));
// function to delete a product
function DeleteProduct(arr, id) {
    var newArr = Object.assign([], arr);
    newArr = newArr.filter(function (pro) {
        if (pro.id != id) {
            return pro;
        }
    });
    return newArr;
}
console.log("The array after deleting a product with id=7", DeleteProduct(shop, "7"));
// function to update price
function updatePrice(arr, newPrice, id) {
    var newArr = Object.assign([], arr);
    newArr = newArr.map(function (pro) {
        if (pro.id == id) {
            var newPro = Object.assign({}, pro);
            newPro.price = newPrice;
            return newPro;
        }
        else
            return pro;
    });
    return newArr;
}
console.log("The array after update the price of the product with id=4 to 120", updatePrice(shop, 120, "4"));
