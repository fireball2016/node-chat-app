// Jan 1st 1970 00:00:00 am
// 1 integer is 1 milisecond
// 1000 is 1 second

var moment = require('moment');
//
// var date = moment();
// console.log(date.format('MMMM Do YYYY, h:mm:ss a'));

new Date().getTime()
var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
