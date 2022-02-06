var arr = [
    { name: 't-shirt', price: 50, id: 1 },
    { name: 'jacket', price: 150, id: 2 },
    { name: 'short', price: 80, id: 3 },
    { name: 'shirt', price: 40, id: 4 }
];
arr.forEach(function (item) {
    console.log(item);
});
var filterprice = arr.filter(function (item) {
    return item.price < 100 && item.price > 50;
});
var sortByPrice = arr.sort(function (a, b) {
    return b.price - a.price;
});
var uppercase = arr.map(function (item) {
    var s = item.name.toUpperCase();
    item.name = s;
    return item;
});
var deleteitembyid = arr.filter(function (item) {
    var arr = Object.assign([], item);
    var givenid = 2;
    return item.id != givenid;
});
console.log(filterprice);
console.log(sortByPrice);
console.log(uppercase);
console.log(deleteitembyid);
