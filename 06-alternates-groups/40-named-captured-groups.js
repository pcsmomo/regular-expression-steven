const txt1 = "<strong>This is a strong tag</strong><i>this is italic</i><></>";

const r1 = /<(\w*)>(.*?)<\/\1>/g;
const r2 = /<(<tag>\w*)>(.*?)<\/\k<tag>>/g;

console.log(txt1.match(r1));
