//import statement
const { boatInventory } = require("./fishingBoat");

// declaring variables for the mongerInventory & chooseChefSelection functions
let mongerBudget = 7.5;
let mongerAmount = 10;
let chefSelections = [];

// .map - return value - A new array with each element being the result of the callback function. same length of the original array
// .filter - return value - returns a new array that passes the test of the original function

// defining function that invokes the boatInventory array, while practicing the .map and .filter methods
const mongerInventory = (mongerBudget, mongerAmount) => {
  const mongerOptions = boatInventory() // defining a new array as the return value of boatInventory
    .filter((fish) => fish.price <= mongerBudget && fish.amount >= mongerAmount) // new array containing elements that pass this original test
    .map((fish) => ({ ...fish, amount: mongerAmount })); // the creates a new array - from the filtered array - will each element being the result of the callback function
  return mongerOptions;
};

// defining chooseChefSelections function
const chooseChefSelections = (dailyPriceLimit) => {
  for (const fish of mongerInventory(mongerBudget, mongerAmount)) {
    // iterating through the return value of mongerInventory() by fish to check our conditional. If it passes, then we are changing the fish.amount value by half.
    if (fish.price <= dailyPriceLimit) {
      fish.amount = fish.amount / 2;
      chefSelections.push(fish); // pushing updated fish objects into the chef selections array
    }
  }
  return chefSelections; // returning updated array
};

// export statements
module.exports = {
  chooseChefSelections,
};
