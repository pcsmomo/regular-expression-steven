const text1 =
  "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.";

const reg = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi; // it's wrong because it will match something like "someday"
const betterReg =
  /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/gi;

const changedText1 = text1.replace(reg, "Monday");
const changedText2 = text1.replace(betterReg, "Monday");
console.log(changedText2);
console.log(changedText1 === changedText2); // if true, same result
