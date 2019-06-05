'use strict';

var personsname;
var firstday;
var material;
var lab2;
var friend;

 personsname = prompt ("Hi there, what's your name?");
    alert (" Nice to meet you " + personsname )
 firstday = prompt ("How was your first day of Code 201?");

 material = prompt ("Did you find the material easy to understand?");

lab2 = prompt ("How many hours do you think it took the average student to complete Lab2?");

friend = prompt ("Would you reccomend this course to a friend?");

material = "yes"
alert ("HElloo");


if(friend == 'yes' || friend == 'YES') {
  console.log('Glad to hear ! ');
} else if ( friend == 'no' || friend == 'NO') {
  console.log('Sorry to hear!');
}else {
  console.log("Error");
}
    