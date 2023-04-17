const txt =
  "Make the outline for the square gray and the fill for the circle grey.";

const regex1 = /gr[ae]y/g;
const regex2 = /gr[ae]y[ .]/g; // [ .] is not a metacharacter

console.log(txt.match(regex1));
console.log(txt.match(regex2));
