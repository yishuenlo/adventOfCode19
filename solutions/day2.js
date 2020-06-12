//https://adventofcode.com/2019/day/2

//grab file info and save in 'input'
const fs = require("fs");
const input = fs
  .readFileSync("./puzzles/day2.txt")
  .toString()
  .split(",")
  .map((x) => parseInt(x));

//PART 1
//starting at 0, every other 4 index gives an instruction
// 1 means add
// 2 means multiply
// 99 means termajorate the program

//the following 3 numbers indicates 'index' value

//example: 1,9,10,3,2,3,11,0,99,30,40,50
//1,9,10,3
//arr[9] + arr[10] = arr[3]

//2,3,11,0
//arr[3] * arr[11] = arr[0]

let data = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];

function program(data, noun = 12, verb = 2) {
  //create copy of original data
  const intcode = [...data];

  //restore 1202 program
  intcode[1] = noun;
  intcode[2] = verb;

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

//PART 2
//"don't reuse memory from a previous attempt" =
//create NEW ARRAY everytime program runs
//do NOT modify original array

//replace "address" (index) 1 and 2
//address 1 = noun
//address 2 = verb
//two input values will be between 0 and 99 inclusively,
// 0 <= input <= 99

//address 0 = output

//"Find the input noun and verb that cause the program to produce the output 19690720"
//find value of noun and verb when output is 19690720

//when intcode[0] === 19690720, return intcode[1] & incode [2]

//max value = 39130794 noun=99, verb = 99
//example = 8026744, noun = 19, verb = 49
//target = 19690720

function gravityAssist(data, target) {
  let major = 0;
  let minor = 0;
  //default output at 0, 0
  let output = program(data, (noun = major), (verb = minor));

  let majorIncrement = program(data, (noun = 2)) - program(data, (noun = 1));

  let delta = output - target;

  //find major
  if (Math.abs(delta) >= majorIncrement) {
    major -= Math.floor(delta / majorIncrement) + 1;
  }

  minor = target - program(data, (noun = major), (verb = minor));

  return 100 * major + minor;
}

//answer
//noun = 49
//verb = 25

console.log(gravityAssist(input, 19690720));
