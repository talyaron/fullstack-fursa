var types;
(function (types) {
    types[types["PINE"] = 0] = "PINE";
    types[types["MULTILAYER"] = 1] = "MULTILAYER";
})(types || (types = {}));
var orderwood = {
    type: types.PINE,
    length: 360,
    width: 160,
    thick: 52,
    setType: function (type) {
        try {
            if (type != types.PINE && type != types.MULTILAYER)
                throw new console.error("type not exist");
            this.type = type;
        }
        catch (err) {
            console.error(err);
        }
    }
};
