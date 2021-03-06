// Assignment Code
//get user inputs variables
var start;
var wantNumber;
var wantSpecial;
var wantUpper;
var wantLower;

//create password input characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//declare choices variable
var input 

var generateBtn = document.querySelector("#generate");
// Write password to the #password input


// to do create prompts - done

// to do allow user to select criteria for password - done

// to do allow user to choose length of password between 8 and 128 - done

// to do allow upper, lower, numbers, and characters for generator - done

// to do validate prompt inputs and ensure at least one type of character is selected - done

// to do display password in text box - done

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  //get user inputs
  start = parseInt(prompt("How long do you want your password? Must be a length between 8 and 128"));
  //create a if esle if else for user input validations 
  //ensure the user inputs a value
  if (!start) {
    alert("You need to input something");
  } 
  //while loop ensuring the input is in the correct range, once it reaches that range get PW input
  else if (start < 8 || start > 128) {
    while (start < 8 || start > 128) {
      start = parseInt(prompt("Must have a length between 8 and 128"));
      }
    wantNumber = confirm("Do you want your password to have numbers?");
    wantSpecial = confirm("Do you want your password to have special characters?");
    wantUpper = confirm("Do you want your password to have uppercase letters?");
    wantLower = confirm("Do you want your password to have lowercase letters?");
    
  }
  //get input types for PW
  else {
    wantNumber = confirm("Do you want your password to have numbers?");
    wantSpecial = confirm("Do you want your password to have special characters?");
    wantUpper = confirm("Do you want your password to have uppercase letters?");
    wantLower = confirm("Do you want your password to have lowercase letters?");
  };
  
  //next if else if else will be for the password writing. Statements based on the user inputs
  //for no criteria selected
  if (!wantNumber && !wantSpecial && !wantUpper && !wantLower) {
    input = alert("You need to pick your password criteria!")
  } 
  //for all criteria selected, concat method used to join the strings
  else if (wantNumber && wantSpecial && wantUpper && wantLower) {
    input = special.concat(number, lowerLetter, upperLetter);
  }
  //for three positives and one negative
  else if (!wantNumber && wantSpecial && wantUpper && wantLower) {
    input = special.concat(lowerLetter, upperLetter);
  }
  else if (wantNumber && !wantSpecial && wantUpper && wantLower) {
    input = number.concat(lowerLetter, upperLetter);
  }
  else if (wantNumber && wantSpecial && !wantUpper && wantLower) {
    input = special.concat(lowerLetter, number);
  }
  else if (wantNumber && wantSpecial && wantUpper && !wantLower) {
    input = special.concat(number, upperLetter);
  }
  //for two positives and two negatives
  else if (wantNumber && wantSpecial && !wantUpper && !wantLower) {
    input = special.concat(number);
  }
  else if (wantNumber && !wantSpecial && !wantUpper && wantLower) {
    input = number.concat(lowerLetter);
  }
  else if (wantNumber && !wantSpecial && wantUpper && !wantLower) {
    input = number.concat(upperLetter);
  }
  else if (!wantNumber && wantSpecial && wantUpper && !wantLower) {
    input = special.concat(upperLetter);
  }
  else if (!wantNumber && wantSpecial && !wantUpper && wantLower) {
    input = special.concat(lowerLetter);
  }
  else if (!wantNumber && !wantSpecial &&wantUpper && wantLower) {
    input = upperLetter.concat(lowerLetter);
  }
  //for one positive and three negatives
  else if (wantNumber && !wantSpecial && !wantUpper && !wantLower) {
    input = number
  }
  else if (!wantNumber && wantSpecial && !wantUpper && !wantLower) {
    input = special
  }
  else if (!wantNumber && !wantSpecial && wantUpper && !wantLower) {
    input = upperLetter
  }
  else if (!wantNumber && wantSpecial && !wantUpper && !wantLower) {
    input = lowerLetter
  };

  //create an array placeholder for password variable
  var pw = [];

  //create random selection variable for inputs
  for (var i = 0; i < start; i++) {
    var pickInputs = input[Math.floor(Math.random() * input.length)];
    pw.push(pickInputs);
  }
  //using the password, joining the pasword array into a string
  var password = pw.join("");
  UserInput(password);
  return password;
};

//display the generated password in the textbox
function UserInput(password) {
  document.getElementById("password").textContent = password;
}