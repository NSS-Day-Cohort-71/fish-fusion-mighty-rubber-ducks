// import statement
const { mongerInventory } = require("./fishMonger");

let chefBudget = 5;

//rename to fish menu
const fishMenu = (chefBudget) => {
  let chefSelections = [];
  let fishTank = [];
  for (const fish of mongerInventory()) {
    if (fish.price <= chefBudget) {
      fish.amount = fish.amount / 2;
      chefSelections.push(fish);
    }
  }
  console.log(`
        <h1>Menu</h1>
        <article class="menu">
        `);

  chefSelections.forEach((fish) => {
    fishTank.push(fish.species);
    console.log(`
          <h2>${fish.species}</h2>
          <section class="menu__item">${fish.species} Soup</section>
          <section class="menu__item">${fish.species} Sandwich</section>
          <section class="menu__item">Grilled ${fish.species}</section>
          </article>
          `);
  });
};

// html will create 3 different meals (per fish) - soup, sandwich and grilled dinner
fishMenu(chefBudget);
