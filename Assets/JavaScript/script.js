// Assignment Code
var generateBtn = document.getElementById("generate"); 

var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-+=_<>;:?/{}~";

function generatePassword() {

  //prompt the user for password criteria
  var passwordLength = prompt("How man characters would you like your password to contain?");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert ("password must at least have 8 characters");
    return; 
  }

  if (passwordLength > 128) {
    alert ("password cannot exceed 128 characters")
    return;  
  }
  //password length 8 < 128
  //confrim to whether not to include lowercase, uppercase, numbers, special characters
  // validate input 
  //gerneate password based on criteria
  //display generated password
  return "Generated password will go here" 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
