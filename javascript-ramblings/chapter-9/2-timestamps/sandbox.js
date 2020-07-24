//timestamps and comparisions
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log('Timestamps now : ', now.getTime());
console.log('Timestamps before : ', before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

//convert diff to minutes, hours, days

//minutes -- 1000milliseconds =  1 second.. divided by 60 gives us minutes
const minutes = Math.round(diff/1000/60);
//hours -- dividing minutes by 60 because 60 minutes === 1 hour
const hours = Math.round(minutes/60);
//days -- 24hours = 1 day. This will get us the difference in days between the TWO Dates.
const days = Math.round(hours/24);

console.log('minutes : ', minutes,' minutes');
console.log('hours   : ', hours,' hours');
console.log('days    : ', days,' days');
// details
console.log(`The blog was written ${days} days ago.`);

//converting timestamps into date objects

const timestamps = 1675938474990;
const timestampsConverted = new Date(timestamps);
console.log(timestampsConverted);