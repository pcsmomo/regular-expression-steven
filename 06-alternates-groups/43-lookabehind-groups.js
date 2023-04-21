const txt1 = "There are 59 items for a price of $199 or €173.";

const r1 = /(?<=[$€])\d+/g; // lookbehind group
const r2 = /(?<![$€])\d+/g; // negative lookbehind group

console.log(r1.test(txt1));
console.log(r2.test(txt1));
