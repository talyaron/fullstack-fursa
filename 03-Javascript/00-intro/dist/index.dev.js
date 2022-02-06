"use strict";

var rootH1 = document.getElementById("rootH1");
rootH1.style.color = "blue";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

setInterval(function () {
  rootH1.style.color = getRandomColor();
}, 1000);