const txt1 = "84432"; // general post code
const txt2 = "84432-4456"; // extended post code

const r1 = /.*/g; // it looks like working, but it matches everything
const r2 = /[0-9]*/g;
const r3 = /[0-9]{5}/g;
const r4 = /^[0-9]{5}$/g;
const r5 = /^[0-9]{5}-[0-9]{4}$/g;
const myAnswer = /^[0-9]{5}(-[0-9]{4})?$/g;

console.log(txt1.match(r1));
console.log(txt1.match(r2));
console.log(txt1.match(r3));
console.log(txt1.match(r4));
console.log(txt1.match(r5));
console.log(txt1.match(myAnswer));
console.log(txt2.match(myAnswer));
