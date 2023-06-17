// To create a new Date object call new Date() with one of the following arguments:

let now = new Date();
alert(now); // shows current date/time

// new Date(milliseconds)

/**
 *
 *
 * Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
 *
 */

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(Jan01_1970);
// now add 24 hours, get 02.01.1970 UTC+0

let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);

// new Date(datestring)

//==If there is a single argument, and it’s a string, then it is parsed with the Date.parse algorithm

let date1 = new Date("2017-01-26");
alert(date1);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

// new Date(year, month, date, hours, minutes, seconds, ms)

new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

//The minimal precision is 1 ms (1/1000 sec):

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date2); // 1.01.2011, 02:03:04.567

// Access date components

// current date
let date = new Date();
// the hour in your current time zone
alert(date.getHours());
// the hour in UTC+0 time zone (London time without daylight savings)
alert(date.getUTCHours());

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
alert(new Date().getTimezoneOffset());

//================ Setting date components

/**
 *
 *
 * setFullYear(year [, month, date])
 * setMonth(month [, date])
 * setDate(date)
 * setHours(hour [, min, sec, ms])
 * setMinutes(min [, sec, ms])
 * setSeconds(sec [, ms])
 * setMilliseconds(ms)
 * setTime(milliseconds)
 *
 *
 *
 */

let today = new Date();
today.setHours(0);
alert(today); // still today, but the hour is changed to 0
today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

let date3 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date3); // ...is 1st Feb 2013!

// get date

let date4 = new Date(2016, 1, 28);
date4.setDate(date4.getDate() + 2);
alert(date4); // 1 Mar 2016

//

let date5 = new Date();
date5.setSeconds(date5.getSeconds() + 70);
alert(date5); // shows the correct date

let date6 = new Date(2016, 0, 2); // 2 Jan 2016
date6.setDate(1); // set day 1 of month
alert(date6);
date6.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert(date6); // 31 Dec 2015

//========== Date to number, date diff ========

/**
 *
 * When a Date object is converted to number, it becomes the timestamp same as   date.getTime() :
 *
 */

let start = new Date(); // start measuring time
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // end measuring time
alert(`The loop took ${end - start} ms`);

//======================  Now

let start1 = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end1 = Date.now(); // done
alert(`The loop took ${end1 - start1} ms`); // subtract numbers, not dates

//============= Benchmarking

// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}
// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}
alert("Time of diffSubtract: " + bench(diffSubtract) + "ms");
alert("Time of diffGetTime: " + bench(diffGetTime) + "ms");
