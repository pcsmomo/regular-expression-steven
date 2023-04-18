const txt1 =
  "SHe sells seashells on a seashore. The shells she sells are seashells, I’m sure.";

const r1 = /[A-Z]+/g;
const r2 = /[A-Z]?/g;
const r3 = /[A-Z]*/g;

console.log(txt1.match(r1));
console.log(txt1.match(r2));
console.log(txt1.match(r3));

const r4 = /[A-Z]{2}/g;
const r5 = /[A-Z]{2,}/g;
const r6 = /[A-Z]{2,4}/g;
console.log(txt1.match(r4));
console.log(txt1.match(r5));
console.log(txt1.match(r6));

const r7 = /s[a-z]+/g;
const r8 = /s[a-z]?/g;
const r9 = /s[a-z]*/g;

console.log(txt1.match(r7));
console.log(txt1.match(r8));
console.log(txt1.match(r9));

// Example 2
const txt2 = "Steve Normal Jeff amanda Sherry";
const r10 = /[A-Z][a-z]+/g;
console.log(txt2.match(r10));

// Example 3
const txt3 = "He picked apples of the apple tree.";
const r11 = /apples?/g;
console.log(txt3.match(r11));

// Example 4
const txt4 = "warning";
const txt5 = "warning!!!!!!";
const r12 = /warning!*/g;
console.log(txt4.match(r12));
console.log(txt5.match(r12));
