const util = require("util");

const today = new Date();

const earthDay = 'April 22, 2022';

console.log(today);

//The 'isDate()' method returns whether the argument is an instance of 'Date'.

//Returns true, because 'today' is a Date instance.
console.log(util.types.isDate(today));

//Return false, because 'earthDay' is a string, not an instance of 'Date'.
console.log(util.types.isDate(earthDay));