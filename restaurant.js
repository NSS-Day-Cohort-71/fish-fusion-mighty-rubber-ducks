// import statement
const { chooseChefSelections } = require("./fishMonger");

// defining fishMenu function
const fishMenu = (dailyPriceLimit) => {
  // declaring currentMenu variable as a string
  let currentMenu = `
<h1>Menu</h1>
  \n<article class="menu">`;

  // updating the value of current menu to include
  currentMenu += chooseChefSelections(dailyPriceLimit)
    .map((fish) => {
      //creating a new array from the return value of chooseChefSelections and returns a concatenated string using the map and join methods. We are using map vs .forEach, so that we don't have to alter the original array.
      return `
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>\n`;
    })
    .join(""); // concatenating the array into a string

  currentMenu += `\n</article>`; // further updating currentMenu

  return currentMenu; // returning fully updated currentMenu
};

// export statement
module.exports = { fishMenu };
