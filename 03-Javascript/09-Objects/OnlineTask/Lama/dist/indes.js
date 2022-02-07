var colors;
(function (colors) {
    colors[colors["BLUE"] = 0] = "BLUE";
    colors[colors["GREEN"] = 1] = "GREEN";
    colors[colors["WHITE"] = 2] = "WHITE";
})(colors || (colors = {}));
var allcolors = {
    color1: colors.BLUE,
    color2: colors.GREEN,
    color3: colors.WHITE,
    printColors: function () {
        try {
            console.log(this.color1);
            console.log(this.color2);
            console.log(this.color3);
        }
        catch (err) {
            console.error(err);
        }
    }
};
console.log(colors);
allcolors.printColors();
