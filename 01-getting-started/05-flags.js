const txt = "Programming courses always startS with a hello world example.";

const regex1 = /s\s/gi;

console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));

console.log(txt.match(regex1));
