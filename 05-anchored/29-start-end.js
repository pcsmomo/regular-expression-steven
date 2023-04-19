const txt1 =
  "The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and everything matches just fine when you test the regex on valid data. The problem is that the regex also matches in cases where it should not match. If you are new to regular expressions, some of these cases may not be so obvious at first.";

const r1 = /^The/g;
const r2 = /first./g;

console.log(txt1.match(r1));
console.log(txt1.match(r2));

const txt2 = "first.";
const r3 = /^first.$/g;
console.log(txt2.match(r3));
