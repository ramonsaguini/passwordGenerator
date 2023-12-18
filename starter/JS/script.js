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
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Function to prompt user for password options
function getPassOpt() {
  let length = parseInt(document.getElementById('length').value);

  //if to check if the length it between 8/128Chart and if is not a number
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128.');
    return;
  }
  //get checkeds options
  const lowercase = document.getElementById('lowercase').checked;
  const uppercase = document.getElementById('uppercase').checked;
  const numeric = document.getElementById('numeric').checked;
  const special = document.getElementById('special').checked;

  //if dont check any box will show an alert
  if (!lowercase && !uppercase && !numeric && !special) {
    alert('Please select at least one character set.');
    return;
  }

  return {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };
}
// Function to generate password with user input
function genPassword() {
  const concatChart = getPassOpt();
  let charSet = [];

  if (concatChart.lowercase) {
    charSet = charSet.concat(lowerCasedCharacters);
  }
  if (concatChart.uppercase) {
    charSet = charSet.concat(upperCasedCharacters);
  }
  if (concatChart.numeric) {
    charSet = charSet.concat(numericCharacters);
  }
  if (concatChart.special) {
    charSet = charSet.concat(specialCharacters);
  }

  let password = '';
  for (let i = 0; i < concatChart.length; i++) {
    password += getRandom(charSet);
  }

  return password;
}

// Get references to the #generate element
var genBtn = document.querySelector('#generate');

genBtn.addEventListener('click', function () {
  var password = genPassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  // Write password to the #password input 
});


//! You can store the generatedPassword as a string and concat each character OR
//! as an array and push each character, then join once you have enough characters
//! Function to prompt user for password options
//! Prompt for password length
//! At least 8 characters, no more than 128 characters
//! Conditional to check that the number that was entered is in range
//! Prompts store data as strings, so need to parse into a number
//! If the user's input is out of range, either return out of the function or call the function again
//! Confirm which character sets to use
//! If the user answers false for all, either return out of the function or call the function again
//! Once they select a character set:
//! Generate a random character for each selected character set
//! Either push selected character sets to a mega-array of all selected characters
//! OR you can keep the arrays separate and generate a random number to select the array and another to select the index
//! Once character sets are selected, move on to generating random characters
//! Function for getting a random element from an array
//! Need a variable to hold the password as it's being generated
//! Need a variable to hold the index that's being generated
//! For loop that loops the number of times that matches the length the user chose
//! Generate a random number
//! That number is the index for a character in the mega-array
//! So then, mega-array[generated-index] is the actual character
//! Add that character to the password
//! Once we finish the for loop, return the generated password
