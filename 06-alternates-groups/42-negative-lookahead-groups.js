const txt1 = "passwordA1";
const r1 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
const r2 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9]).*$/g; // negative lookahead group
console.log(r1.test(txt1));
console.log(r2.test(txt1));
