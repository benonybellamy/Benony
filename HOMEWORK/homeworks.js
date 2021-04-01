// HELLO WORLD!!!!!!!!!

// Exercise

// alert( "I am JavaScript!" );

// VARIABLES

// Exercise 1 :


// let admin, name;

// name = "Ben";

// admin = name;

// alert( admin );



// Exercise 2 :


// let ourplanet = "Jupiter";



// Exercise 3 :


// let currentUserName = "Ben";



// Exercise 4 :

// const BIRTHDAY = '18.04.1982'; // We SHOULD  use upper case here because our value is known PRIOR to execution.

// const AGE = someCode(BIRTHDAY); // Here we SHOULD  keep the lower case for "age" because the "age" is not "STATIC" or (STABLE), but "DYNAMIC" (or "UNSTABLE"), so it can CHANGE over the time.That's why we should use lower case for it.
 



// INTERACTION: ALERT, PROMPT, CONFIRM


// let name = prompt("How can i call you please?", "");
//           alert(name);


// COMPARISONS : NO EXERCISES!!!!!!!








// Conditional branching: IF, '?' 

// Exercise 1


// if ("0") {
// alert( 'Hello' );
// }




// Exercise 2 : NAME OF JAVASCRIPT

// let javaScriptName = prompt('The “official” name of " JavaScript?' , '');
              
// if (javaScriptName == 'ECMAScript') {
// alert( 'Right Answer!' );
// }
// else {
// alert( "Don't know ? ECMAScript! " );
// }



// Exercise 3:  SIGN AFFECTATION


// let numeroGagnant = prompt('Quel est le numero gagnant?' , "");
 //
  //                          if (numeroGagnant > 0) {
  //                          alert( 1 );
  //                          } 
  //                          else if 
  //                          (numeroGagnant < 0) {
  //                          alert( -1 );
  //                          } else {
  //                          alert( 0 );
 //                           }





// EXERCISE 4: WRITE if into "?"


// let result = (a + b < 4) ? 'Below' : 'Over';




// EXERCISE 5: WRITE "if else" into "?"

// let message = (login == 'Employee') ? 'Hello' :
// (login == 'Director') ? 'Greetings' :
// (login == '') ? 'No login' :
//'';   






// LOGICAL OPERATORS



// EXERCISE 1: OR


// alert( null || 2 || undefined ); //  Answer: 2.  Because "2" is the first  value "True".


//EXERCISE 2: OR


// alert( alert(1) || 2 || alert(3) ); // Answer:  "undefined", then "2".


//EXERCISE 3: AND



// alert( 1 && null && 2 ); // Answer: Because "null" is the first  value "False".



//EXERCISE 4: AND


// alert( alert(1) && alert(2) ); // Answer: "undefined". Because "undefined" is FALSE.



//EXERCISE 5: The result of OR AND OR



// alert( null || 2 && 3 || 4 );  

// PRIORITY of "&&" ->  2 && 3 --> 3
//alert( null || 3 || 4 ); --> Answer: 3



//EXERCISE 6: Check the range between

// if (age >= 14 && age <= 90);




// //EXERCISE 7: Check the range outside

// if (!(age >= 14 && age <= 90)); // Variant A.


// if (age < 14 || age > 90); // Variant B.




//EXERCISE 8: A question about "if"


//First : Executes.
// if (-1 || 0) alert( 'first' ); // Answer: "-1" ---> True. ----> Executes.


//Second : Doesn't execute.
// if (-1 && 0) alert( 'second' ); // Answer: "0" ---> False. ----> Doesn't execute.


//Third : Executes.
// if (null || -1 && 1) alert( 'third' );

//PRIORITY of "&&" --->  null || -1 && 1 --> null || 1 ----> 1. Executes.




 
//EXERCISE 9: Check the login

// I really tried, but...




 // let Name = prompt("Who's there?", '');

// if (Name === 'ADMIN') {

// let myPass = prompt('Password?', '');

// if (myPass === 'THEMASTER') {
// alert( 'Welcome!' );
 // } else if (myPass === '') {
// alert( 'Canceled' );
 // } else {
 // alert( 'Wrong password' );
  // }

 // } else if (Name === '') {
 // alert( 'Canceled' );
 // } else {
// alert( "I don't know you" );
 // }




// Nullish coalescing operator '??' 
// NO HOMEWORK




// LOOPS


// Exercise 1: 

//let i = 3;

//while (i) {
  //alert( i-- ); // ---> 1, 2 and 3. Answer: Last loop value: 3.
//}


// Exercise 2: Which values does the while loop show?

// Variant 1:

// let i = 0;
// while (++i < 5) alert( i ); // After INCREMENTATION ---> Answers: 1, 2, 3 and 4.


// Variant 3: 

// let i = 0;
// while (i++ < 5) alert( i ); // Answers: 1, 2, 3 and 4.




// Exercise 4: Which values get shown by the "for" loop?


// The prefix form:

// for (let i = 0; i < 5; i++) alert( i ); // After INCREMENTATION ---Answers: 0, 1, 2, 3 and 4.

// The postfix form:

// for (let i = 0; i < 5; ++i) alert( i ); // After INCREMENTATION ---Answers: 0, 1, 2, 3 and 4.



// Exercise 5: Output even numbers in the loop

//for (let i = 2; i < 11; i++) {
   // if (i % 2 == 0) {
     // alert( i );
    //}
 // }



 // Exercise 6: Replace "for" with "while"


 // for (let i = 0; i < 3; i++) {
    // alert( `number ${i}!` );
  // }

  // Becomes: 

  // let i = 0;
// while (i < 3) {
  // alert( `number ${i}!` );
  // i++;
// }



// Exercise 7: Repeat until the input is correct


// let numberX;

// do {
    // // numberX = prompt("Enter a number greater than 100?", "");
// } while (numberX <= 100 && numberX);



