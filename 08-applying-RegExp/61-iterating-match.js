/*
Iterate over each match and log the information to the console.
*/

const phrase =
  "First number: 32, and a second number 100. Here is the last number 15.";

const regex = /\d+/g;
let match = null;

while ((match = regex.exec(phrase))) {
  if (match.index == regex.lastIndex) {
    // to avoid infinite loops with zero-width matches
    regex.lastIndex++;
  }
  console.log(match);
  console.log("regex.lastIndex", regex.lastIndex);
}
