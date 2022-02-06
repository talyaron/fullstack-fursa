var arr = [{ id: 0, name: 't-shirt', price: 80 },
    { id: 1, name: 'blouse', price: 120 },
    { id: 2, name: 'short', price: 100 },
    { id: 3, name: 'skirt', price: 200 },
    { id: 4, name: 'pijamas', price: 250 },
    { id: 5, name: 'dress', price: 170 },
    { id: 6, name: 'coat', price: 300 },
    { id: 7, name: 'jacket', price: 230 },
    { id: 8, name: 'jeans', price: 250 }
];
//function sorts aray by price
function sortByPrice(array) {
    var sortedArray = Object.assign([], array);
    sortedArray.sort(function (a, b) {
        return a.price - b.price;
    });
    return sortedArray;
}
//function sort array by name
function sortByName(array) {
    var sortedArray = Object.assign([], array);
    sortedArray.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    return sortedArray;
}
//function for a filter price (from -> to)
function filterPrice(array, from, to) {
    var filteredArray = Object.assign([], array);
    filteredArray = filteredArray.filter(function (item) {
        return item.price > from;
    });
    filteredArray = filteredArray.filter(function (item) {
        return item.price < to;
    });
    return filteredArray;
}
//map function to convert all letters of name to capital
function mapToCapital(array) {
    var capitaledArray = Object.assign([], array);
    capitaledArray = capitaledArray.map(function (item) {
        var item1 = Object.assign({}, item);
        item1.name = item1.name.toUpperCase();
        return item1;
    });
    return capitaledArray;
}
//function with filter to delete an item with id
function deleteById(array, id) {
    var filteredArray = Object.assign([], array);
    filteredArray = filteredArray.filter(function (item) {
        return item.id != id;
    });
    return filteredArray;
}
//map function to update price by id
function updatePriceById(array, id, newPrice) {
    var updatedArray = Object.assign([], array);
    updatedArray = updatedArray.map(function (item) {
        var item1 = Object.assign({}, item);
        if (item1.id == id) {
            item1.price = newPrice;
        }
        return item1;
    });
    return updatedArray;
}
console.log('The original array', arr);
console.log('The array sorted by rice', sortByPrice(arr));
console.log('the array sorted by name', sortByName(arr));
console.log('the array filtered by price from 100 to 300', filterPrice(arr, 100, 300));
console.log('the array with capitalized nams', mapToCapital(arr));
console.log('the array filtered to delete item with id = 3', deleteById(arr, 3));
console.log('the array with udated price for item with id 6 up to 700', updatePriceById(arr, 6, 700));
