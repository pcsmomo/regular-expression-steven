const txt1 = "A string that contains numbers (12345)";
const txt2 = "A second line _ (12345)			3 Tabs.";

const r1 = /\d/g;
const r2 = /\w/g;
const r3 = /\w/g;

console.log(txt1.match(r1));
console.log(txt2.match(r1));
console.log(txt1.match(r2));
console.log(txt2.match(r2));
console.log(txt1.match(r3));
console.log(txt2.match(r3));
