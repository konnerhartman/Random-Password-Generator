var generateBtn = document.querySelector("#generate"); // Selects the "Generate Password" button.
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split(""); // .split breaks this string of characters into individual characters.
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz" .split("");
var numberChar = "0123456789" .split("");
var specialChar = "!@#$%^&*(){}<>_-=+.,?;:" .split("");
var chosenChar = []; // Creates an empty array to store (.push) chosen characters into. 


function generatePW () {
  var pwLength = prompt("How many characters would you like your password to be? \nMust be between 8 - 128 characters."); // Prompts user to select the length of characters for password.
  var lengthConfirm = parseInt(pwLength); // Converts users input from a string into a number.
  
  // If user puts in an incorrect character or number outside of 9-127, an "ERROR" will make them retry.
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert ("ERROR! \nInvalid choice. \nMust be between 8 - 128 characters.");
    return;
  };
  
  // These variables must be below the above 'if' statement or else the alert 'ERROR' would not appear until cycling through the 4 prompts below.
  var lowers = confirm("Would you like lowercase characters?"); // Prompts user to choose whether or not they would like "lowercase" characters.
  var uppers = confirm("Would you like uppercase characters?"); // Prompts user to choose whether or not they would like "uppercase" characters.
  var numbers = confirm("Would you like number characters?"); // Prompts user to choose whether or not they would like "number" characters.
  var specials = confirm("Would you like special characters?"); // Prompts user to choose whether or not they would like "special" characters.
  var randomPW = ""; // Creates a variable with an empty string.

  // When function is called, if 'lowers' is confirmed (or equals true), it will loop through the 'lowerCaseChar' array.
  if (lowers === true) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      // .push will add the characters to the 'chosenChar' array.
      chosenChar.push(lowerCaseChar[i]);
    }
  };

  // When function is called, if 'uppers' is confirmed (or equals true), it will loop through the 'upperCaseChar' array.
  if (uppers === true) {
    for (var i = 0; i < upperCaseChar.length; i++) {
      // .push will add the characters to the 'chosenChar' array.
      chosenChar.push(upperCaseChar[i]);
    }
  };

  // When function is called, if 'numbers' is confirmed (or equals true), it will loop through the 'numberChar' array.
  if (numbers === true) {
    for (var i = 0; i < numberChar.length; i++) {
      // .push will add the characters to the 'chosenChar' array.
      chosenChar.push(numberChar[i]);
    }
  }
  // When function is called, if 'specials' is confirmed (or equals true), it will loop through the 'specialChar' array.
  if (specials === true) {
    for (var i = 0; i < specialChar.length; i++) {
      // .push will add the characters to the 'chosenChar' array.
      chosenChar.push(specialChar[i]);
    }
  }
  
  // Loops through all characters that were selected, adds them to the empty string of 'randomPW' and randomizes them.
  for (var i = 0; i < lengthConfirm; i++) {
    randomPW += chosenChar[
      // .floor rounds this number down and .random selects a random number between 0-1. 
      // The * multiplies this random number by the length of the chosenChar to give it the value that the user chose.
        Math.floor(Math.random() * chosenChar.length)
    ];
  }

  return randomPW;
}

// This function renders the createdPW to the webpage. 
function createPW() {
  var PWText = document.querySelector("#password");
 
  // Takes the password created from the generatePW function and adds it into the textarea.
  PWText.value = generatePW();
}

// .addEventListener tells the browser that when the button "Generate Password" is clicked, run the createPW function.
generateBtn.addEventListener("click", createPW);