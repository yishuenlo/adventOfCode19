//determine fuel needed based on mass of modules
//to calculate fuel = Math.floo(mass / 3) - 1

//grab text file and store in 'input' variable
const fs = require("fs");
const input = fs.readFileSync("./puzzles/day1.txt").toString().split("\n");

//PART 1
function moduleFuel(modules) {
  return modules.reduce(
    (total, module) => total + (Math.floor(module / 3) - 2),
    0
  );
}

console.log(moduleFuel(input));

//PART 2
//calculate fuel for fuel
function fuelForFuel(mass) {
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel < 0) return 0;
  return fuel + fuelForFuel(fuel);
}

function calcFuel(modules) {
  //calculate fuel
  return modules.reduce(
    (total, module) => total + fuelForFuel(module),
    0
  );
}

//5105716
console.log(calcFuel(input));


