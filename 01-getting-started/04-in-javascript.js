const txt = "Programming courses always starts with a hello world example.";

let regex1 = new RegExp("hello");
const regex2 = /world/;

console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true

console.log(regex1.exec(txt)); // []
console.log(regex2.exec(txt)); // []

console.log(txt.match(regex1)); // []

console.log(txt.search(regex1)); // index: 41

console.log(txt.replace(regex1, "hi"));

console.log(txt.split(regex1));

// split with space
const regex3 = /\s/;
console.log(txt.split(regex3));
// [
//   "Programming",
//   "courses",
//   "always",
//   "starts",
//   "with",
//   "a",
//   "hello",
//   "world",
//   "example.",
// ];
