// import statement
const { fishMenu } = require("./restaurant.js");

// declaring variable as an integer
const dailyPriceLimit = 3.99;

// declaring menu variable as return value of fishMenu
const menu = fishMenu(dailyPriceLimit);

//logging menu variable
console.log(menu);
