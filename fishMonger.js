//import statement
const { boatInventory } = require("./fishingBoat");

// declaring variables for the boatInventory function
let mongerBudget = 7.5;
let mongerAmount = 10;
let mongerOptions = [];

//invoke boat inventory function
boatInventory(mongerBudget, mongerAmount);

// define new function mongerInventory
const mongerInventory = (mongerBudget, mongerAmount) => {
  for (const fish of boatInventory()) {
    if (fish.price <= mongerBudget && fish.amount >= mongerAmount) {
      fish.amount = mongerAmount;
      mongerOptions.push(fish);
    }
  }
  return mongerOptions;
};

mongerInventory(mongerBudget, mongerAmount);

// export statements
module.exports = {
  mongerInventory,
};
