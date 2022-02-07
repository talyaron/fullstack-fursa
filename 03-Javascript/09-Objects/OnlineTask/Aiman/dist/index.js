var category;
(function (category) {
    category[category["Action"] = 0] = "Action";
    category[category["Comedey"] = 1] = "Comedey";
    category[category["Horror"] = 2] = "Horror";
    category[category["Scifi"] = 3] = "Scifi";
})(category || (category = {}));
var movie = {
    id: 101,
    date: new Date('03-12-2022'),
    category: category.Action,
    setRating: function (rating) {
        try {
            if (!rating.includes('stars')) {
                throw new Error("Invalid rating");
            }
            else {
                this.rating = rating;
            }
        }
        catch (error) {
        }
    }
};
movie.setRating('5 stars');
console.log(movie);
