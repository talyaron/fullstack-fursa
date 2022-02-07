var min = 0;
var max = 0;
function getId() {
    if (min == 0)
        return ++max;
    else
        return --min;
}
function AddItem(arr, newName, newPrice, newQuantity, newDescription) {
    var newItem = { itemId: getId(), name: newName, quantity: newQuantity, price: newPrice, description: newDescription };
    arr.push(newItem);
}
var items = [];
AddItem(items, "bread", 15, 14, "something to eat");
AddItem(items, "COOKEI", 1, 29, "sweets");
AddItem(items, "cola", 2, 1, "drink");
AddItem(items, "milk", 3, 9, "cow juice");
AddItem(items, "protein", 200, 200, "get shreded");
AddItem(items, "creatine", 2, 80, "muscle juice");
var soretedItems = items.sort(function (it1, it2) {
    return it1.price - it2.price;
});
console.log("sorted items by price:", soretedItems);
var QuantityOverFifty = items.filter(function (it) {
    return (it.quantity < 30 && it.quantity > 1);
});
console.log("filter quantity over 50:", QuantityOverFifty);
var mapArray = items.map(function (it) {
    it.name = it.name.toUpperCase();
    return it;
});
console.log("changing name to uppercase", mapArray);
function removeItem(arr, id) {
    return arr.filter(function (it) {
        return it.itemId != id;
    });
}
function updatePrice(arr, id, price) {
    var newArary = arr.map(function (it) {
        if (it.itemId == id) {
            it.price = price;
        }
        return it;
    });
    return newArary;
}
