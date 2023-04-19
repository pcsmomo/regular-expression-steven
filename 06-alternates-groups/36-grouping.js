const txt1 =
  "a5c3a2b1d1 a1e3a2b1a4 d5c3a2b1d1 aac3a2b1d1 a5c3a2b1d6 a5c312b1d1 d4b2a5b2d3";

const r1 = /[a-d][1-5]{5}/g;
const r2 = /([a-d][1-5]){5}/g; // grouping

console.log(txt1.match(r1));
console.log(txt1.match(r2));

const txt2 =
  "Today is monday and tomorrow is tuesdays and then we have wednesday.";

const r3 = /\bmonday|tuesday|wednesday\b/gi;
const r4 = /\b(monday|tuesday|wednesday)\b/gi;
console.log(txt2.match(r3));
console.log(txt2.match(r4));
