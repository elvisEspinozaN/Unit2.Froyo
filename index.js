const defaultUserInput = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

// prompt the user with a default value
const userInput = prompt(
  "Enter your preferred froyo flavors, separated by commas:",
  defaultUserInput
);

let flavorsArray = userInput.split(",");
console.log(flavorsArray);

// create an obj, allows user to 'observe a table listing how many of each flavor they have ordered'
let flavorCount = {};

// iterate through arr
for (let i = 0; i < flavorsArray.length; i++) {
  // rid of extra spaces
  const flavor = flavorsArray[i].trim();
  // if key is present, +1 to its value
  if (flavorCount[flavor]) {
    flavorCount[flavor] += 1;
  } else {
    // if not present, initialize its value as =1
    flavorCount[flavor] = 1;
  }
}

// console.table the obj we just built
console.table(flavorCount);
