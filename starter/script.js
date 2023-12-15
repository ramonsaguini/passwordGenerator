// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  const length = document.getElementById('length').value;
  const lowercase = document.getElementById('lowercase').checked;
  const uppercase = document.getElementById('uppercase').checked;
  const numeric = document.getElementById('numeric').checked;
  const special = document.getElementById('special').checked;

  var allCharacters = "";

  //! if i select lowerCase Chart box will include a lowerCaseChrt from my var
  if (lowercase) allCharacters += lowerCasedCharacters;

  //! if i select Special Chart box will include a SpecialChrt from my var
  if (special) allCharacters += specialCharacters;

  //! if i select UpperCase CHart box will include a UpperCaseChrt from my var
  if (uppercase) allCharacters += upperCasedCharacters;

  //! if i select Numeric box will include a Number from my var
  if (numeric) allCharacters += numericCharacters;
}


// // Function for getting a random element from an array
// function getRandom(arr) {
var pass = "";
for (let i = 0; i < pass.length; i++) {
  const randomPass = Math.floor(Math.random() * allCharacters.length);
  pass += allCharacters.charAt(randomPass);
}

// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);