const txt1 = "Inplant this idea: plan to plant multiple trees on this planet.";

const r1 = /plan/g;
const r2 = /\bplan/g;
const r3 = /\bplan\b/g;
const r4 = /\bplan to\b/g;

console.log(txt1.match(r1));
console.log(txt1.match(r2));
console.log(txt1.match(r3));
console.log(txt1.match(r4));

const r5 = /\Bplan\b/g;
const r6 = /\Bplan/g;
const r7 = /\wplan/g; // the different between \w \B
console.log(txt1.match(r5));
console.log(txt1.match(r6));
console.log(txt1.match(r7));

const r10 = /\bin/gi;
const r11 = /\bthis\b/g;
console.log(txt1.match(r10));
console.log(txt1.match(r11));
