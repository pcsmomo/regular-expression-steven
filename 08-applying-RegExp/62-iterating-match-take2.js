const str = "How many Os are in our overly long string?";
const rgx = /o/gi;

// console.log(rgx.exec(str));
// console.log(rgx.lastIndex);
// console.log(rgx.exec(str));
// console.log(rgx.lastIndex);

let theArray;
let cnt = 0;

while ((theArray = rgx.exec(str)) !== null) {
  console.log(theArray);
  console.log("reg.lastIndex", rgx.lastIndex);
  cnt++;
}
console.log("total count of 'O'", cnt);

// Example 2. Using matchAll
console.log("\n=========================\nExample 2. Using matchAll");
const it = str.matchAll(rgx);
console.log(it); // Object [RegExp String Iterator] {}

let result;
let cnt2 = 0;
while ((result = it.next())) {
  if (result.done) break;
  console.log(result.value);
  cnt2++;
}
console.log("total count of 'O'", cnt);
