// Assignment code here
var lowercaseC = "abcdefghijklmnopqrstuvwxyz";
var uppercaseC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericC = "0123456789";
var specialC = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password based on user criteria
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid length. Please choose a length between 8 and 128 characters.");
  }
  
  var includeLowercase = confirm("Would you like to include lowercase characters?");
  var includeUppercase = confirm("Would you like to include uppercase characters?");
  var includeNumeric = confirm("Would you like to include numeric characters?");
  var includeSpecial = confirm("Would you like to include special characters?");

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must choose at least one character type.");
    includeLowercase = confirm("Would you like to include lowercase characters?");
    includeUppercase = confirm("Would you like to include uppercase characters?");
    includeNumeric = confirm("Would you like to include numeric characters?");
    includeSpecial = confirm("Would you like to include special characters?");
  }

  var availableC = "";
  if (includeLowercase) {
    availableC += lowercaseC;
  }
 if (includeUppercase) {
    availableC += uppercaseC;
  }
 if (includeNumeric) {
    availableC += numericC;
  }
if (includeSpecial) {
    availableC += specialC;
  }

  console.log(availableC);

  let newPassword = "";
  let randomIndex = 0;
  let randomChar = "";

  for (let i=0; i< passwordLength; i++){
    randomIndex = Math.floor(Math.random() * availableC.length);

    randomChar = availableC[randomIndex];
    newPassword += randomChar;

  }
   return newPassword;

}