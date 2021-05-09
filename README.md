# 03 JavaScript: Password Generator

Please click "Generate Password" to utilize the random password generator. You will be asked to set a length for your password and confirm which types of characters your password will include. Once these characters are confirmed, you will receive your random password set to the length you requested.

For this assignment we were provided with some starter code that included the function for "writePassword" and for the "generateBtn".

I then wrote a function for "generatePassword" that includes the following:

-A variable that prompts the user to set the password length. The user response is then converted from a string to a numeric value using the parseInt method and stored in the var "lengthOk".

-Used an "if" statement to verify that the password legnth was between 8 and 128 characters long per the assignment instructions. If not, the user will be prompted to enter a valid password length.

-Used another "if" statement and Number.isNaN method with the "legthOk" value as the object to verify that the value returned for "lengthOk" is a number and not another random character.

-I then defined the variables for each valid character that can be used for the password and stored them as arrays. 

-I created a variable for "charSet" that would be used to store the users response for characters they wanted to include. 

-User will be prompted to confirm which characters they would like to include in the password. 

-Used "if" statements to confirm which characters the user would want, and "for" loops to iterate through the character arrays when confirmed by the user. Used the push method to take the confirmed characters and store them in charSet array.

-Used an "if" statement to alert the user if they did not choose at lease one character type for their password. 

-I created a variable, pwOptions, that is left as an empty string to recieve the information being stored in the charSet array. 

-Used a "for" loop to iterate through potential password characters stored in "lengthOk" variable. Used "Math.floor" to round down to whole numbers and "Math.random" * charSet.length to randomize the characters returned to the charSet array. 

-Used addition assignment operator (+=) to take the charSet array and add it to pwOptions variable and randomized that outcome using the above Math.floor and Math.random methods. 

-Then returned the pwOptions varable which will display the random password in the field for the user to see. 

-The event listener was provided in the initial assignment code. 

## Link: 

https://codyconck.github.io/Random-Password-Generator/

## ScreenShot:
![Screenshot](Assets/03-javascript-homework-demo.png)
## Built With:
JavaScript

