// Assignment Code
var generateBtn = document.querySelector("#generate");  

var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-+=_<>;:?/{}~";

function generatePassword() {

  var password = "";
  var passwordCharacter = "";

  //prompt the user for password criteria
  var passwordLength = prompt("How man characters would you like your password to contain?");
  passwordLength = parseInt(passwordLength);

 //password length 8 < 128
  if (passwordLength < 8) {
    alert ("password must at least have 8 characters");
    return; 
  }

  if (passwordLength > 128) {
    alert ("password cannot exceed 128 characters")
    return;  
  }
  
  //confrim to whether not to include lowercase letters
  var lowercaseOption = confirm("Click OK to confirm lowercase letters");

  if (lowercaseOption) {
    passwordCharacter += lowercaseCharacters;
  }

  // confirm to whether not to include uppercase letters 
  var uppercaseOption = confirm("Click OK to confirm uppercase letters");

  if (uppercaseOption) {
    passwordCharacter += uppercaseCharacters; 
  }

  // confirm to wether not to include special characters 
  var specialcharactersOption = confirm("Click OK to confirm to adding special characters");

  if (specialcharactersOption) {
    passwordCharacter += specialCharacters; 
  }
  

  // confirm to whether not to include numbers 
  var numbersOption = confirm("Click OK to confirm adding numeric characters");

  if (numbersOption) {
    passwordCharacter += numbers; 
  }

  console.log(passwordCharacter) 

  // gernate password and show it in box 
  for (var i = 0; i <= passwordLength; i++) {
    var password = password + passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)]; 
    console.log(password)
  }

  return password; 

} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
