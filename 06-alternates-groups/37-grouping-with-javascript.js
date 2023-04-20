const txt1 = "2018/3/9";

const r1 = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/;
const r2 = /(\d\d)/g;

const result = r1.exec(txt1);
console.log(result);
console.log(r2.exec(txt1));
console.log(txt1.match(r1));

if (result) {
  year = result[1];
  month = result[2];
  day = result[3];
  console.log(year, month, day);
} else {
  console.log("Wrong format");
}

// extra example

const r3 = /^(\d\d\d\d)[-./](\d{1,2})[-./](?:\d{1,2})$/; // ?: is a non-capturing group
const result2 = r3.exec(txt1);
console.log(result2);

if (result2) {
  year = result2[1];
  month = result2[2];
  day = result2[3]; // undefined
  console.log(year, month, day);
} else {
  console.log("Wrong format");
}
