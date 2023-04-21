const txt1 = "allthingsjavascript.com http://google.com youtube.com";
const txt2 = "allthingsjavascript.co";

const r1 = /\w+(?=\.com)/g; // lookahead group

const result = txt1.match(r1);
console.log(result);
console.log(txt2.match(r1));

// Password validation
const txt3 = "passwordA1";
const r3 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
const result2 = r3.test(txt3);
console.log(result2);
