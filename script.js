
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  //prompt user to set pw length
  var pwLength = prompt("Your password may contain between 8 and 128 Characters. Please set password length.")
  
  //using parseInt method to convert value of pwLength from string to number.
  var lengthOk = parseInt(pwLength);
  console.log(lengthOk);


    // checking length of pw
    if (pwLength < 8 || pwLength > 128) {
      alert("Your password does not meet correct character length. Please click 'Generate Password' again, and choose length between 8 and 128 characters.");
      return null;
    } 
    //used isNaN to check that returned value was a number
    if (Number.isNaN(lengthOk)){
      alert("You chose an invalid length. Please click 'Generate Password' again, and choose length between 8 and 128 characters.");
      return null;
    }

  //variable to recieve character set from push methods below
  var charSet = [];
  //create variables for allowable characters(numbers, special characters, upper and lowercase letters)
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  
  //establish variables to confirm potential characters
  var containsNum = confirm("Click OK to include numbers in password.");
  if (containsNum) {
    for (let i = 0; i < numbers.length; i++) {
      //console.log(numbers[i])
      charSet.push(numbers[i])
    }
  }

  var containsUpper = confirm("Click OK to include uppercase characters.");
  if (containsUpper) {
    for (let i = 0; i < uppercase.length; i++) {
      //console.log(uppercase[i])
      charSet.push(uppercase[i])
    }
  }

  var containsLower = confirm("Click OK to include lowercase characters.");
  if (containsLower) {
    for (let i = 0; i < lowercase.length; i++) {
      //console.log(lowercase[i])
      charSet.push(lowercase[i])
    }
  }

  var containsSpecial = confirm("Click OK to include special characters.");
  if (containsSpecial) {
    for (let i = 0; i < specialChar.length; i++) {
      //console.log(specialChar[i])
      charSet.push(specialChar[i])
    }
  }
  console.log(charSet)
  //create conditional to assure user uses at least one of the above characters 
  if (charSet < 1) {
    alert("You must choose to include at least one of the password criteria to proceed.")
  }

  //variable to randomize potential password options that were pushed to the charSet
  var pwOptions = "";
  for (var i = 0; i < lengthOk; i++) {
    charSet[
      Math.floor(Math.random() * charSet.length)];
      //used addition assignment operator to take the charSet[] and add it to pwOptions variable.
      pwOptions += charSet[
        Math.floor(Math.random() * charSet.length)];
  }
  return pwOptions;
}

generateBtn.addEventListener("click", writePassword)
