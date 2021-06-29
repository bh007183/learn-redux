// Assignment Code
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "="];
let password = [];

function generatePassword() {
  let specialChar = window.prompt(
    "Would you like your password to have special charectors? Enter Yes or No."
  );
  let upperChar = window.prompt(
    "Would you like your password to have Upper Case? Enter Yes or No."
  );
  let lowerChar = window.prompt(
    "Would you like your password to have Lower Case? Enter Yes or No."
  );
  let number = window.prompt(
    "Would you like your password to have numbers? Enter Yes or No."
  );
  let length = window.prompt(
    "How long would you like your password to be? length of at least 8 characters and no more than 128 characters"
  );

  let integer = parseInt(length)

  if (integer > 7 && integer < 129) {
    while (password.length < integer) {
      
        if (specialChar.toLowerCase() === "yes") {
          let randomeSpecial =
          specialChar[Math.floor(Math.random() * specialChar.length)];
          password.push(randomeSpecial);
        }
        if(password.length  === integer){
          console.log("what?")
          break;
        }
        if (upperChar.toLowerCase() === "yes") {
          let randomeUpper =
          upperCase[Math.floor(Math.random() * upperCase.length)];
          password.push(randomeUpper);
        }
        if(password.length === integer){
          console.log("what?")
          break;
        }
        
        if (lowerChar.toLowerCase() === "yes") {
          let randomeLower =
          lowerCase[Math.floor(Math.random() * lowerCase.length)];
          password.push(randomeLower);
        }
        if(password.length === integer){
          console.log("what?")
          break;
        }
        
        if (number === "yes") {
          let randomeNumber = numeric[Math.floor(Math.random() * numeric.length)];
          password.push(randomeNumber);
        }
    }
  } else {
    alert("Must be at least 8 characters and no more than 128 characters");
  }

  return password.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
