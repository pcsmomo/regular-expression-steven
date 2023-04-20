const txt1 = "2018/03/09";

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
