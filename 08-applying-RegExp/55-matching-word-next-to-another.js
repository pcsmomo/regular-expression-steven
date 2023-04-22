const txt1 =
  "Lets put several different words together and see what we can match.";
const r1 = /\b(?:words\W+together)\b/g;
console.log(r1.exec(txt1));

const txt2 =
  "Lets put several different words more text together and see what we can match.";
const r2 = /\b(?:words\W+(?:\w+\W+){0,5}together)\b/g;
console.log(r2.exec(txt2));

const txt3 =
  "Lets put several together different words more text and see what we can match.";
const r3 =
  /\b(?:words\W+(?:\w+\W+){0,5}together)|(?:together\W+(?:\w+\W+){0,5}words)\b/g;
console.log(r3.exec(txt3));
