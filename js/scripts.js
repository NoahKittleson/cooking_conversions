var gallonsToLiters = function() {
	var gallons = prompt("How many gallons?");
  alert("That is " + parseInt(gallons) / 0.26417 + " Liter(s).");
};
var ouncesToGrams = function() {
  var ounces = prompt("How many ounces?");
  alert("That is " + parseInt(ounces) / 0.035274 + " gram(s).");
};
var cupsToTeaspoons = function () {
	var cups = prompt("How many cups?");
  alert("That is " + cups * 48 + " teaspoon(s).");
  //alert(calc(parseInt(cups));
};
var tablespoonsToQuarts = function() {
	var tablespoons = prompt("How many tablespoons?");
  alert("That is " + tablespoons / 64 + " quart(s).");
};

ouncesToGrams();
