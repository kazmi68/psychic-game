var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = letters[(Math.floor(Math.random()* letters.length))];

var win = 0;
document.querySelector("#win").innerHTML = win;

var loss = 0;
document.querySelector("#loss").innerHTML = loss; 

var guess = 5;
document.querySelector("#guess").innerHTML = guess; 

var guessedLetters = [];
document.querySelector("#guessedLetter").innerHTML = guessedLetters

document.onkeyup = function(event) {
	console.log("random letter: " + randomLetter);
var userGuess = event.key.toLowerCase();
console.log(userGuess);
if(userGuess == randomLetter ){
	console.log("here");
win = win + 1; 
document.querySelector("#win").innerHTML = win;
randomLetter = letters[(Math.floor(Math.random() * letters.length))];
guess = 5;
document.querySelector("#guess").innerHTML = guess; 
guessedLetters = [];
document.querySelector("#guessedLetter").innerHTML = guessedLetters
}
if(userGuess !== randomLetter ){
console.log("not equal " + randomLetter);
guessedLetters.push(userGuess);
document.querySelector("#guessedLetter").innerHTML = guessedLetters
// decrease the number of guess in step 6 by 1. 
// to prevent guess to go down to -1 -2 -3 .. onwards, we prevent the code to do tht by stoppign the guess to go down using if(guess > 0)
if(guess > 0){
//if guess is greater than 0, we decrease the count of guess by 1. 
guess = guess -1;
document.querySelector("#guess").innerHTML = guess; 
}
}	 
//if user runs out of guess3es. 
if (guess === 0 ){
//we  create the loss counter by 1. 
loss = loss +1;
document.querySelector("#loss").innerHTML = loss; 
//since user lost, we want to create a new random character for user to play again. 
randomLetter = letters[(Math.floor(Math.random() * letters.length))];
// refresh the count of guesses to 5. 
guess = 5;
document.querySelector("#guess").innerHTML = guess; 
guessedLetters = [];
document.querySelector("#guessedLetter").innerHTML = guessedLetters
}

}

/* 
1. create an array of letters containing letters a - z
  var letters = ["a", "b", "c", ...... "z"];

2. pick a letter from array from step 1 randomly using .random()
var randomLetter = letters[(Math.floor(Math.random() * letters.length)];

4. create a variable to save the number of wins. 
var win = 0;
document.querySelector("#win").innerHTML = win;

5. create a variable to save the number of losses.
var loss = 0;
document.querySelector("#loss").innerHTML = loss; 

6. create a variable to save the number of guesses.
var guess = 5;
document.querySelector("#guess").innerHTML = guess; 

7. create an array variable to save letters user typed. 
var guessedLetters = [];
document.querySelector("#gussedLetter").innerHTML = guessedLetters


3. create an on key up function. 
document.onkeyup = function(event) {
var userGuess = event.key.toLowerCase();

step 8
step 9
}

8. create an if statement to increase the win in step 4, and start the game again. 
if(userGuess === randomLetter ){
win = win + 1; 
randomLetter = letters[(Math.floor(Math.random() * letters.length)];
guess = 5;
guessedLetters = [];
}

9. create another if statement to increase the loss count in step 5.
if(userGuess !== randomLetter ){
// decrease the number of guess in step 6 by 1. 
// to prevent guess to go down to -1 -2 -3 .. onwards, we prevent the code to do tht by stoppign the guess to go down using if(guess > 0)
if(guess > 0){
//if guess is greater than 0, we decrease the count of guess by 1. 
guess = guess -1;

}

//if user runs out of guess3es. 
if (guess === 0 ){
//we  create the loss counter by 1. 
loss = loss +1;
//since user lost, we want to create a new random character for user to play again. 
randomLetter = letters[(Math.floor(Math.random() * letters.length)];
// refresh the count of guesses to 5. 
guess = 5;
guessedLetters = [];
}

}




}
*/
/*
1. create an array of letters containing A-Z
var arry letters= {"a", "b",....z}
2. pick letters from array from step1 randomly using . random ()
3. create a onekeyup function.
   doucment.onekeyup=function(event) {
	
   }
 4. create a variable to save the mumber of winnings.
    var win =0
    document.querySelector("#win").innerHTML= wins;
 5  create a variable to save the number of losses.
    var loss=0
    document.querrySelector("#loss").innerHTML=loss;
 6  create a variable to save the number of guesses.
    var guess =5;
    document.querySelector("#guess").innerHTML= guess;
 7  create an array to variable to save letters user typed.
    var= guessedLetters= [];
    document.querySelector("#guessedLetters").innerHTML= guessedLetters;
 8  create a if statement to increase the win in step 4, and start the game again.




*/
