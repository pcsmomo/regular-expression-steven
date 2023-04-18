const txt1 = "My telephone number is as follows: 801-555-6789.";

const r1 = /\w{3,5}/g;
const r2 = /\w\w{3,5}/g;
const r3 = /\w{3}/g;
const r4 = /\w{3,}/g;
console.log(txt1.match(r1));
console.log(txt1.match(r2));
console.log(txt1.match(r3));
console.log(txt1.match(r4));

const txt2 = "#ff0000 #C0C0C0 these are hex numbers";
const r5 = /#[0-9A-F]{6}/gi;
console.log(txt2.match(r5));

// Select two types of hex numbers
const txt4 = "#ff0000 #C0C0C0 #FFF #000 #FF00 these are hex numbers";
const r8 = /#[0-9A-F]{6}|#[0-9A-F]{3}/gi;
const r9 = /(#[0-9A-F]{6})|(#[0-9A-F]{3})/gi;
const r10 = /#[0-9A-F]{3}|#[0-9A-F]{6}/gi; // it doesn't work. taking the first one
console.log(txt4.match(r8));
console.log(txt4.match(r9));
console.log(txt4.match(r10));

const txt5 = `#ff0000 #C0C0C0 #FFF #000 #FF00 these are hex numbers
#F0F
`;
const r11 = /(#[0-9A-F]{6}|#[0-9A-F]{3})([^0-9A-F]|$)/gi;
console.log(txt5.match(r11));

// Social number
const txt3 = "529-66-9898";
const r6 = /\d{3}-\d{2}-\d{4}/;
const r7 = /\d\d\d-\d\d-\d\d\d\d/;
console.log(txt3.match(r6));
console.log(txt3.match(r7));
