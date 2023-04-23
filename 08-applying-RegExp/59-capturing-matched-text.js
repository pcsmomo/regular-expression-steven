/*
Extract all the numbers from this phrase and capture those numbers. Then sum the numbers.
*/
let total = 0;
const phrase =
  "First number: 32, and a second number 100. Here is the last number 15.";

const regex = /\d+/g;

const result = phrase.match(regex);
console.log(result);

if (result) {
  total = result.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}
console.log(total);
