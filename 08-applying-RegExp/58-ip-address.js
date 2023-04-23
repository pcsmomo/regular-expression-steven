const txt1 = "25.013.55.255";
const txt2 = "192.32.1.1";
const txt3 = "832.26.123.5";
const txt4 = "0.1.12.1";
const txt5 = "255.255.255.1";

const r1 =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

console.log(r1.test(txt1));
console.log(r1.test(txt2));
console.log(r1.test(txt3));
console.log(r1.test(txt4));
console.log(r1.test(txt5));

// With variable to look cleaner
const regIP = "([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])";
const r2 = new RegExp(`^(${regIP}\\.){3}(${regIP})$`);
console.log(r2.test(txt1));
console.log(r2.test(txt2));
console.log(r2.test(txt3));
console.log(r2.test(txt4));
console.log(r2.test(txt5));
