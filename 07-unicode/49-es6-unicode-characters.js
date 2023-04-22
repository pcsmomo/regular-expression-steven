const gclef = "𝄞-clef";

const r1 = /^.-clef/;
const r2 = /^.-clef/u; // es6 unicode

console.log(r1.test(gclef)); // false
console.log(r2.test(gclef)); // true

const r3 = /\u{1D11E}/;
const r4 = /\u{1D11E}/u; // es6 unicode

console.log(r3.test(gclef)); // false
console.log(r4.test(gclef)); // true
