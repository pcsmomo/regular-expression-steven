const txt1 = "<b>This is Bold</b>";

console.log(txt1.replace(/b>/g, "strong>"));

/*
Create a new array that shows the names with the firstname and then the surname.
*/

const names = [
  "Smith, James",
  "Peterson, Alyssa",
  "Johnson, Lynette",
  "Lopez, Tony",
];

const newNames = names.map(function (name) {
  return name.replace(/(\w+), (\w+)/, "$2 $1");
});

console.log(names);
console.log(newNames);
