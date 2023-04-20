const txt1 = "yoyo";

const r1 = /(yo)/;

// \1 is a backreference to the first capturing group
// but it doesn't capture patterns
const r2 = /(yo)\1/;

console.log(r1.exec(txt1));
console.log(r2.exec(txt1));

const txt2 = "2018-9-9";
const txt3 = "2018-9-8";

const r3 = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/;
const r4 = /^(\d\d\d\d)[-./](\d{1,2})[-./]\2$/; // it captures only the actual text, not the pattern
console.log(r3.test(txt2)); // true
console.log(r4.test(txt2)); // true
console.log(r4.test(txt3)); // false, different value, 9 and 8

const txt4 = "2018-9-8";
const txt5 = "2018-9/8";
const r5 = /^(\d\d\d\d)([-./])(\d{1,2})\2(\d{1,2})$/;
console.log(r5.test(txt4)); // true
console.log(r5.test(txt5)); // false, different value, - and /

const txt6 = "2018-9-8";
const r6 = /^(?:\d\d\d\d)([-./])(\d{1,2})\2(\d{1,2})$/; // ?: is a non-capturing group
const r7 = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/;
console.log(r6.test(txt2)); // false
console.log(r7.test(txt2)); // true

// Usecase of `?:`
// when you already have a complicated regular expression with capturing groups
// and you want to use a group and don't want to break the rest of the expression
const txt7 = "2018-9-8";
const r8 = /^\d\d\d\d([-./])(\d{1,2})\1(\d{1,2})$/; // ?: is a non-capturing group
const r9 = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/; // ?: is a non-capturing group
console.log(r8.test(txt2)); // true
console.log(r9.test(txt2)); // true
