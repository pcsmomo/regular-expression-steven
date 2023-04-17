const txt =
  "There have been 4 - 5 times I have tried, but I will try it again 10 times.";

const regex1 = /[1-7]/g;
const regex2 = /[1-7][0-9]/g;
const regex3 = /4\-5/g;

console.log(txt.match(regex1));
console.log(txt.match(regex2));
console.log(txt.match(regex3));

const txt2 = "Exception 0xAF89F";

const r4 = /0x[0-9A-F][0-9A-F]/g;
console.log(txt2.match(r4));

const t3 = "How do we capture the number 13 - 20";
const r5 = /[10-20]/g;
const r6 = /[0-9][0-9] - [0-9][0-9]/g;
console.log(t3.match(r5));

const t4 = "How do we capture the number 13 - 20 and 13-20";
const r7 = /[0-9][0-9][ -]*[0-9][0-9]/g;
console.log(t4.match(r7));
