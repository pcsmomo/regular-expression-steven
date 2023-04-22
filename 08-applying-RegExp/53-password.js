const password = "NsRN3/>zvd";

const checkPass = function (password) {
  const theLength = /^.{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    numbers = /[0-9]/,
    special = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  if (
    theLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    numbers.test(password) &&
    special.test(password)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPass(password));

// My solution based on the previous lookahead group example
const myRegex =
  /^(?=.{8,32})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).*$/;

console.log(myRegex.test(password));
