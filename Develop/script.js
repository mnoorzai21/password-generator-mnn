// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "";
    // TODO: add code to generate the password here
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var passwordLength = 10;
    for (var i = 0, n = charSet.length; i < passwordLength; ++i) {
        password += charSet.charAt(Math.floor(Math.random() * n));
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