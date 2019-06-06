'use strict';

var usersname = prompt('Hi there, I\'m Hanna, what\'s your name? ' );
console.log(usersname);
alert ('Nice to meet you , ' +  usersname  + '. ' + ' Let\'s play a little game to see if you know me well! ');

//Invoke question functions

q1();
q2();
q3();
q4();
q5();
q6();
q7();


//This is question 1

function q1() {
  var q1answer = prompt (' [Y/N] Do you think my birth name was \'Hanna\'? ').toUpperCase();
  console.log(q1answer);
  
  if (q1answer === 'Y') {
    alert ('Nope, it was actually \'Hannamariam Engidawork Alemu\' LOL!' );
  } else if (q1answer === 'N') {
    alert( 'Yup! It was the longest name ever! ' );
  } else {
    alert( 'Error! PLease enter [Y/N]');
  }
}

//This is question 2

function q2() {
  var q2answer = prompt (' [Y/N] If I had become a nurse, do you think I\'d be good at it ?').toUpperCase();
  console.log(q2answer);
  
  if (q2answer === 'Y') {
    alert (' Aww thank you!' );
  
  } else if (q2answer === 'N') {
    alert( ' Really? Bummer! ');
  } else {
    alert( 'Error! PLease enter [Y/N]');
  }
}

//This is question 3

function q3() {
  var q3answer = prompt (' [Y/N] Do you think I speak four languages? ').toUpperCase();
  console.log(q3answer);
  
  if (q3answer === 'Y') {
    alert (' Gotcha! I actually speak only two! ' );
  
  }else if (q3answer === 'N'){
  
    alert( ' You got it right! I only speak two languages. ');
  } else {
    alert( 'Error! PLease enter [Y/N]');
  }
}

//This is question 4

function q4() {
  var q4answer = prompt (' [Y/N] Do you think I moved from Minnesota to Seattle for school? ').toUpperCase();
  console.log(q4answer);
  
  if (q4answer === 'Y') {
    alert (' That\'s kind of true, but I moved because it was too cold! ' );
  
  }else if (q4answer === 'N'){
  
    alert( ' Yup! I moved because it was too cold! ');
  } else {
    alert( 'Error! PLease enter [Y/N]');
  }
}

//This is question 5

function q5() {
  var q5answer = prompt (' [Y/N] Do you think I\'m 21 years old? ').toUpperCase();
  console.log(q5answer);
  
  if (q5answer === 'Y') {
    alert (' Yup! ' );
  
  }else if (q5answer === 'N'){
  
    alert( ' I get that a lot, but I really am 21 years old. ' );
  } else {
    alert( 'Error! PLease enter [Y/N]');
  }
}

//This is question 6

function q6() {
  var guesses = 4;
  var q6answer = parseInt(prompt (' How many cups of coffee do you think I have every day? '));
  while ( guesses > 0 ) {
  
    guesses--;
    if (q6answer > 2) {
      alert('That\'s too much coffee!');
      q6answer = parseInt(prompt (' Try again! '));
      console.log(q6answer, 'too high');
  
    }else if (q6answer < 2) {
      alert('That\'s not enough coffee!');
      q6answer = parseInt(prompt ('Try again! '));
      console.log(q6answer, 'too low');
    }else if(q6answer == 2) {
      alert('That\'s exactly correct!');
      console.log(q6answer, 'correct');
      break;
    }
  }
}


//This is question 7

function q7() {
  var gbguesses = 6;
  var correct = false;
  var favcolors = ['red' , 'yellow' , 'green' , 'blue' , 'orange' , 'colorless'];
  
  while (gbguesses > 0 ) {
  
    var q7answer = prompt(' Can you guess my favorite gummybear color? ').toLowerCase();
    console.log(q7answer);
    gbguesses--;
    for(var i = 0; i < favcolors.length; i++){
  
      if (q7answer === favcolors[i]){
        correct = true;
      }
    }
    if (correct === true){
      alert(q7answer + ' is one of my favorie flavors ');
      break;
    }
    else if (correct === false){
      alert('try again');
    }
  }
}










