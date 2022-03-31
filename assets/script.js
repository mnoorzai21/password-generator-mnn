// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var candidates = ""
var length = 0
var includeLower = false
var includeUpper = false
var includeSpecial = false
var includeNumber = false
var letter = ""

length = prompt("Please enter a length for your password ", "");





function generatePassword() {

    // TODO: add code to generate the password here



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








// var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     var passwordLength = 12;
//     for (var i = 0, n = charSet.length; i < passwordLength; ++i) {
//         password += charSet.charAt(Math.floor(Math.random() * n));
//     }