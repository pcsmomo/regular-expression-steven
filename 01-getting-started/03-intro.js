const txt = "Programming courses always starts with a hello world example.";

const regex1 = new RegExp("hello");
const regex2 = /world/;

console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true
