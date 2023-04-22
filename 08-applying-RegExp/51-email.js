const txt1 = "something@domain.com";

const myAnswer = /^\w+@[a-zA-Z]+\.\w+$/g;
const r1 = /.+@.+\..+/g;
const r2 = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g;

console.log(myAnswer.test(txt1));
console.log(r1.test(txt1));
console.log(r2.test(txt1));
