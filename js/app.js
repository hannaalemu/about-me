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

var answer = friend.toUpperCase();

var answer2 = material.toUpperCase();


if(answer === 'YES' || answer === 'Y') {
  console.log('Glad to hear ! ');
} else if ( answer == 'N' || answer == 'NO') {
  console.log('Sorry to hear!');
}else {
  console.log("Error");
}

if(answer2 === 'YES' || answer2 === 'Y') {
    console.log('Glad to hear ! ');
  } else if ( answer2 == 'N' || answer2 == 'NO') {
    console.log('Sorry to hear!');
  }else {
    console.log("Error");
  }
    