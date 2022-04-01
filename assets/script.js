// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // TODO: add code to generate the password here
    var password = "";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var candidates = "";
    var length = 0;
    var includeLower = false;
    var includeUpper = false;
    var includeSpecial = false;
    var includeNumber = false;
    var letter = "";

    length = prompt("Please enter a length for your password ", "");
    if (length < 8 || length > 128) {
        alert("Password should be from 8 to 128 characters long. Please start over.");
        return "";
    }
    includeLower = confirm("Do you want to use the lowercase letters?");
    if (includeLower) {
        var randLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        candidates += lowerCase;
        letter = randLowerCase;
        password += letter;
    }
    includeUpper = confirm("Do you want to use the uppercase letters?");
    if (includeUpper) {
        var randUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
        candidates += upperCase;
        letter = randUpperCase;
        password += letter;
    }
    includeSpecial = confirm("Do you want to use the special characters?");
    if (includeSpecial) {
        var randSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        candidates += specialChars;
        letter = randSpecialChar;
        password += letter;
    }
    includeNumber = confirm("Do you want to use numbers?");
    if (includeNumber) {
        var randNumbers = numbers[Math.floor(Math.random() * numbers.length)];
        candidates += numbers;
        letter = randNumbers;
        password += letter;
    }
    if (candidates.length === 0) {
        alert("You must choose at least one character type.");
        password = "Error: no character types selected. Please click on Generat Password button and choose a password with at least one character type."
    }
    while (password.length < length) {
        letter = candidates[Math.floor(Math.random() * candidates.length)];
        password += letter;
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