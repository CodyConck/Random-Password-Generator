//create variables for allowable characters(numbers, special characters, upper and lowercase letters)


//create functions to prompt user
function generatePassword() {
  var numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  var charSet = []
  //ask user to choose length of pw, store that in var named length
  var askUser = prompt("Your password may contain between 8 and 128 Characters. Please set password length.")
  if (askUser < 8 || askUser > 128) {
    alert("Your passwerd does not meet correct character length. Please choose length between 8 and 128 characters.")
    generatePassword()
  }
  console.log(askUser)
  //(conditional for number only) (2 conditionals for 8-128 char)
 var containsNum = confirm("Click OK to include numbers in password.");
 var containsUpper = confirm("Click OK to include uppercase characters.");
 var containsLower = confirm("Click OK to include lowercase characters.");
 var containsSpecial = confirm("Click OK to include special characters.");
if (containsNum) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    charSet.push(numbers[i])
  }
}
if (containsUpper) {
  for (let i = 0; i < uppercase.length; i++) {
    console.log(uppercase[i])
    charSet.push(uppercase[i])
  }
}
if (containsLower) {
  for (let i = 0; i < lowercase.length; i++) {
    console.log(lowercase[i])
    charSet.push(lowercase[i])
  }
}
if (containsSpecial) {
  for (let i = 0; i < specialChar.length; i++) {
    console.log(specialChar[i])
    charSet.push(specialChar[i])
  }
}
 console.log(containsNum, containsUpper, containsLower, containsSpecial)
//create conditional to assure user uses at least one of the above characters 
if (charSet < 1) {
  alert("You must choose to include at least one of the password criteria to proceed.")
  generatePassword()
}
//create object to hold password options
}

//function to pull elements from array randomly (randomArray)


//function generatePassword
//if else statements and for loops coming

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
