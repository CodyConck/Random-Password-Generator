//create variables for allowable characters(numbers, special characters, upper and lowercase letters)
var numbers = ["0" ,"1", "2", "3", "4",...]
var uppercase = ["A", "B", ...]
var lowerase = []
var specialChar = []

//create functions to prompt user
function askUser() {
  //ask user to choose length of pw, store that in var named length
  //(conditional for number only) (2 conditionals for 8-128 char)
 var containsNum = confirm("Click OK to include numbers in password.");
 var containsUpper= confirm("Click OK to include uppercase characters.");
 var containsLower = confirm("Click OK to include lowercase characters.");
 var containsSpecial = confirm("Click OK to include special characters.");
//create conditional to assure user uses at least one of the above characters 
//create object to hold password options
}

//function to pull elements from array randomly


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
