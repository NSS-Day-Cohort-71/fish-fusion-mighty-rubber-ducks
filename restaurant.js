// import statement
const { chefSelections, chooseChefSelections } = require("./fishMonger");

//rename to fish menu
const fishMenu = (dailyPriceLimit) => {
  let fishTank = [];

  chooseChefSelections(dailyPriceLimit);

  let currentMenu = `
<h1>Menu</h1>
  \n<article class="menu">`;
  chefSelections.forEach((fish) => {
    fishTank.push(fish.species);
    currentMenu += `
  <h2>${fish.species}</h2>
  <section class="menu__item">${fish.species} Soup</section>
  <section class="menu__item">${fish.species} Sandwich</section>
  <section class="menu__item">Grilled ${fish.species}</section>\n`;
  });

  currentMenu += `\n</article>`;

  return currentMenu;
};

// html will create 3 different meals (per fish) - soup, sandwich and grilled dinner

module.exports = { fishMenu };
