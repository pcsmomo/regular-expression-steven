const txt1 = "24/06/2022";

// after 20xx year
const r1 = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[0-9])\/20[0-9]{2}$/g;
console.log(r1.test(txt1));
