
const mongoose = require("mongoose");

const FavoritesSchema = mongoose.Schema({
    userId: String,
    restId: String,
});

const Favorites = mongoose.model('favorites', FavoritesSchema);


export default Favorites