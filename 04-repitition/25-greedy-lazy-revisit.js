const txt1 = "32-6678, 45-668778, 65-454";

const r1 = /\d{2}-\d{4,6}/g;
const r2 = /\d{2}-\d{4,6}?/g; // Lazy

console.log(txt1.match(r1));
console.log(txt1.match(r2));

// another example
const txt2 = "32-6678-1, 45-668778-1, 65-454";

const r3 = /\d{2}-\d{4,6}?-/g;
console.log(txt1.match(r3));
