//determine fuel needed based on mass of modules
//to calculate fuel = Math.floo(mass / 3) - 1

const fs = require("fs");

function moduleFuel() {
  fs.readFile("./challenges/day1.txt", (err, data) => {
    if (err) console.log("ERROR, CANNOT FIND FILE");

    //grab modules and convert to array
    const modules = data.toString().split("\n");

    //   const modules = ['12', '14', '1969', '100756'];

    //calculate fuel
    const fuel = modules.reduce(
      (total, module) => total + (Math.floor(module / 3) - 2),
      0
    );

    console.log(fuel);
  });
}

function fuelForFuel(mass) {
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel < 0) return 0;
  return fuel + fuelForFuel(fuel);
}

function calcFuel(data) {
  //convert data to array
  const modules = data.toString().split("\n");

  //calculate fuel
  const fuel = modules.reduce(
    (total, module) => total + fuelForFuel(module),
    0
  );

  return fuel;
}

//5105716
function totalModuleFuel() {
  fs.readFile(__dirname + "../../challenges/day1.txt", (err, data) => {
    if (err) console.log("ERROR, CANNOT FIND FILE");

    //calculate fuel
    console.log(calcFuel(data));
  });
}

totalModuleFuel();
