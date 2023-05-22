// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowerCaseLettersSelection = [
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
  var upperCaseLettersSelection = [
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
  var numbersSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var symbolsSelection = ["!", "@", "#", "$", "%"];

  var resultCharaters = [];
  var userCharacters = [];

  var lengthConfirm = prompt(
    "How many characters do you want between 8 and 128?"
  );
  var upperCases = prompt(
    "Would you like uppercase letters in your password? Type yes"
  );
  var lowerCases = prompt(
    "Would you like lowercase letters in your password? Type yes"
  );
  var numbers = prompt("Would you like any numbers in your password? Type yes");
  var symbols = prompt(
    "Would you like any special symbols in your password? Type yes"
  );

  if (upperCases === "yes") {
    resultCharaters = resultCharaters.concat(upperCaseLettersSelection);
  }
  if (lowerCases === "yes") {
    resultCharaters = resultCharaters.concat(lowerCaseLettersSelection);
  }
  if (numbers === "yes") {
    resultCharaters = resultCharaters.concat(numbersSelection);
  }
  if (symbols === "yes") {
    resultCharaters = resultCharaters.concat(symbolsSelection);
  }
  console.log(resultCharaters);

  for (var i = 0; i < lengthConfirm; i++) {
    userCharacters.push(
      resultCharaters[Math.floor(Math.random() * resultCharaters.length)]
    );
  }

  return userCharacters.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt user with generation questions
//password length between 8 - 128, lower case, upper case, special characters
//validate the input
//display the password to user
