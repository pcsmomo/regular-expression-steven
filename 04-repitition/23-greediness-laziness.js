const txt1 = `<p>This is the first paragraph.</p><p>Paragraph number two.</p>

<p>This is the first paragraph.</p><p>Paragraph number two.</p>`;

// Greediness: as much as it can
const r1 = /<p>.*<\/p>/;
const r2 = /<p>.*<\/p>/g;
console.log(txt1.match(r1));
console.log(txt1.match(r2));

// Laziness: as little as it can
const r3 = /<p>.*?<\/p>/;
const r4 = /<p>.*?<\/p>/g;
console.log(txt1.match(r3));
console.log(txt1.match(r4));
