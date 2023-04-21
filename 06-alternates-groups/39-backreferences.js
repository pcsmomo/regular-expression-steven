const txt1 = "a1c1d5c1d5b2b3d4";

const r1 = /[a-d][1-5]/g;
const r2 = /([a-d][1-5]){3}/g; // grouping

console.log(txt1.match(r1));
console.log(txt1.match(r2));

const txt2 = "a1a1d5c1d5b2b3d4";
const r3 = /([a-d][1-5])\1/g; // back reference

console.log(txt1.match(r3));
console.log(txt2.match(r3));

const txt3 = "<strong>This is a strong tag</strong><i>this is italic</i><></>";

const r4 = /<(\w+)>[\w\s]+<\/\1>/g;
const r5 = /<(\w*)>(.*?)<\/\1>/g; // includes empty tags

console.log(txt3.match(r4));
console.log(txt3.match(r5));
