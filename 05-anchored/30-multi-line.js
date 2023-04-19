const txt1 = `The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and everything matches just fine when you test the regex on valid data.
The problem is that the regex also matches in cases where it should not match. If you are new to regular expressions, some of these cases may not be so obvious at first.`;

const r1 = /^The/g;
const r2 = /^The/gm;

console.log(txt1.match(r1));
console.log(txt1.match(r2));

const r3 = /\./g;
const r4 = /\.$/g;
const r5 = /\.$/gm;

console.log(txt1.match(r3));
console.log(txt1.match(r4));
console.log(txt1.match(r5));

// multi line
const txt2 = `Test tensentence.
Test two sentence.`;
console.log(txt2.match(r4));
console.log(txt2.match(r5));

// space after the first sentence
const txt3 = `Test tensentence. 
Test two sentence.`;
console.log(txt3.match(r4));
console.log(txt3.match(r5));

// new line at the end
const txt4 = `Test tensentence.
Test two sentence.
`;
console.log(txt4.match(r4));
console.log(txt4.match(r5));
