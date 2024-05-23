//import statement
const { boatInventory } = require("./fishingBoat");

// declaring variables for the boatInventory function
let mongerBudget = 7.5;
let mongerAmount = 10;
let mongerOptions = [];
let chefSelections = [];

// define new function mongerInventory & invoke boat inventory function
// const mongerInventory = (mongerBudget, mongerAmount) => {
//   for (const fish of boatInventory()) {
//     if (fish.price <= mongerBudget && fish.amount >= mongerAmount) {
//       fish.amount = mongerAmount;
//       mongerOptions.push(fish);
//     }
//   }
//   return mongerOptions;
// };

// new map method for mongerInventory with sidekick Claude
const mongerInventory = (mongerBudget, mongerAmount) => {
  const mongerOptions = boatInventory()
    .filter((fish) => fish.price <= mongerBudget && fish.amount >= mongerAmount)
    .map((fish) => ({ ...fish, amount: mongerAmount }));

  return mongerOptions;
};

// choose fish for the chef that fits the budget
const chooseChefSelections = (dailyPriceLimit) => {
  for (const fish of mongerInventory(mongerBudget, mongerAmount)) {
    if (fish.price <= dailyPriceLimit) {
      fish.amount = fish.amount / 2;
      chefSelections.push(fish);
    }
  }
};

// export statements
module.exports = {
  chefSelections,
  chooseChefSelections,
};
