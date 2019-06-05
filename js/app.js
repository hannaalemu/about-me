'use strict';

usersname=prompt ("Hi there, I'm Hanna, what's your name?")
console.log(username);
alert ("Nice to meet you , "+  usersname  + " Let's play a little game to see if you know me well! ")

var q1answer = prompt (" [Y/N] Do you think my birth name was 'Hanna'? ")
  console.log(q1answer.toUpperCase());
  If (q1answer === "Y"){
    alert ("Nope, it was actually 'Hannamariam Engidawork Alemu' LOL!" );

    else If (q1answer === "N"){
    alert( "Yup! It was the longest name ever! ");
    }

    else {
      alert( "Error! PLease enter [Y/N]");
    }
  }

var q2answer = prompt (" [Y/N] If I had become a nurse, do you think I'd be good at it ? ")
  console.log(q2answer.toUpperCase());

  var q3answer = prompt (" [Y/N] Do you think I speak four languages? ")
  console.log(q3answer.toUpperCase());

  var q4answer = prompt (" [Y/N] Do you think I moved from Minnesota to Seattle for school? ")
  console.log(q4answer.toUpperCase());

  var q5answer = prompt (" [Y/N] Do you think I'm 21 years old? ")
console.log(q5answer.toUpperCase());


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
    