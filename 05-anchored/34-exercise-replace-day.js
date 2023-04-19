/*
The content.js file contains a string of text stored in a variable text1. 
This string of text is a statement that contains a day of the week as a part of the statement. 
Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. 
Display the results to the console. 
*/

const text1 =
  "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.";
// const result =
//   "Each and every Monday, at the beginning of the day, we hold a staff meeting. At the Monday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Monday. Just be aware that somedays this Monday meeting might not occur. When that happens, we will make an announcement.";

const reg = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi;

const changedText = text1.replace(reg, "Monday");
console.log(changedText);
