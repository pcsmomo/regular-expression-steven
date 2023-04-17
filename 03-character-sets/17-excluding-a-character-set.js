const txt1 = "Exception 0xGB89F";
const r1 = /0x[^0-9A-F][0-9A-F]/g;
console.log(txt1.match(r1));

const txt2 = "abcdefghijklmnop^";
const r2 = /^[a-z]/g;
const r3 = /[a-z]^/g;
const r4 = /[a-z]\^/g;
console.log(txt2.match(r2));
console.log(txt2.match(r3));
console.log(txt2.match(r4));
