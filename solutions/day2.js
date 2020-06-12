const fs = require('fs');

//starting at 0, every other 4 index gives an instruction
// 1 means add
// 2 means multiply
// 99 means terminate the program

//the following 3 numbers indicates 'index' value

//example: 1,9,10,3,2,3,11,0,99,30,40,50
//1,9,10,3
//arr[9] + arr[10] = arr[3]

//2,3,11,0
//arr[3] * arr[11] = arr[0]

let data = [1,9,10,3,2,3,11,0,99,30,40,50];

function restore(intcode) {
    //restore 1202 program
    intcode[1] = 12;
    intcode[2] = 2;

  //increment opcode by 4
  for (let opcode = 0; opcode < intcode.length; opcode += 4) {
    let first = intcode[opcode + 1];
    let second = intcode[opcode + 2];
    let third = intcode[opcode + 3];

    //if value is 1, add
    if (intcode[opcode] === 1) {
      intcode[third] = intcode[first] + intcode[second];
    } else if (intcode[opcode] === 2) {
      intcode[third] = intcode[first] * intcode[second];
    } else if (intcode[opcode] === 99) {
      break;
    }
  }

  return intcode[0];
}

fs.readFile(__dirname + "../../challenges/day2.txt", (err, data) => {
  if (err) console.log("ERROR");
  data = data
    .toString()
    .split(",")
    .map((x) => parseInt(x));
  console.log(restore(data));
});

