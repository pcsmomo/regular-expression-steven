const txt1 = "Smith, Andrea";

const r1 = /\u0061/g;
const r2 = /[\u0061-\u0067]/g;

console.log(txt1.match(r1));
console.log(txt1.match(r2));

const txt2 = "£¥©®";

const r3 = /\u00A3/g;
console.log(txt2.match(r3));

const txt3 = "“Here is a quote”";
const txt4 = "“Here is a quote”";

const r4 = /[\u201c\u201d]/g;
const r5 = /\u0022/g;
console.log(txt3.match(r4));
console.log(txt4.match(r5));
