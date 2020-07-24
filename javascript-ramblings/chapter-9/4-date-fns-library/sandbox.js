// date-fns Library

const now = new Date(); 

//dateFnS
console.log(dateFns.isToday(now));

// formating options

console.log(dateFns.format(now,'YYYY')); // integer for the year
console.log(dateFns.format(now,'MMMM')); // returns a string for the month - March
console.log(dateFns.format(now,'MMM')); // returns a shorten string for the month - Mar
console.log(dateFns.format(now,'dddd')); // returns a string for the day- Friday
console.log(dateFns.format(now,'ddd')); // returns a shorten string for the day- Fri
 


