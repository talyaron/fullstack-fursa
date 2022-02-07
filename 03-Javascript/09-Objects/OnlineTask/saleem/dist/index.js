var fruits;
(function (fruits) {
    fruits[fruits["bannana"] = 0] = "bannana";
    fruits[fruits["apple"] = 1] = "apple";
    fruits[fruits["grape"] = 2] = "grape";
})(fruits || (fruits = {}));
var choosenBag = {
    fruit1: fruits.apple,
    fruit2: fruits.bannana,
    fruit3: fruits.grape,
    getfriuts: function () {
        console.log(this.fruit1, this.fruit2, this.fruit3);
    }
};
console.log(choosenBag);
choosenBag.getfriuts();
