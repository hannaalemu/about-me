'use strict';

var personsname = prompt ("Hi there, what's your name?");
    alert (" Nice to meet you " + personsname )

var firstday = prompt ("How was your first day of Code 201?");

var material = prompt ("Did you find the material easy to understand?");
 
var answer = ["yes", "no"];

answer.push("yes");

var lab2 = prompt ("How many hours do you think it took the average student to complete Lab2?");

var friend = prompt ("Would you reccomend this course to a friend?");

var answer = ['yes', 'YES' , 'no' , 'NO' ];

friend.push('yes');
friend.push('no');

console.log(answer);


if(friend == 'yes' || friend == 'YES') {
  console.log('Glad to hear ! ');
} else if ( friend == 'no' || friend == 'NO') {
  console.log('Sorry to hear!');
}else {
  console.log("Error");
}
    