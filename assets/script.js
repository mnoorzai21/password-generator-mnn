// Generating my button
const generateBtn = document.querySelector("#generate");

function generatePassword() {
    
    // TODO: add code to generate the password here
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";

    let password = "";
    let candidates = "";
    
    // Prompt user for password length
    const lengthInput = prompt("Please enter a password length (8–128):", "");
    const length = parseInt(lengthInput, 10)

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Password length must be a number between 8 and 128.")
        return "";
    }
   
    // Character type confirmations
    const includLower = confirm("Do you want to include lowercase letters?");
    const includUpper = confirm("Do you want to include uppercase letters?");
    const includSpecial = confirm("Do you want to include special characters?");
    const includNumber = confirm("Do you want to include Numbers?");

    // Ensure at lease one type of characters are selected
    if (!includLower && !includUpper && !includSpecial && !includNumber) {
        alert("You must choose at least one character type.")
        return "Error: No character types selected.";
    }
    
    // Helper function to get a random character from a string
    const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

    // At least one character of each selected type
    if (includLower) {
        candidates += lowerCase;
        password += getRandomChar(lowerCase);
    }
    if (includUpper) {
        candidates += upperCase
        password += getRandomChar(upperCase);
    }
    if (includSpecial) {
        candidates += specialChars;
        password += getRandomChar(specialChars);
    }
    if (includNumber) {
        candidates += numbers
        password += getRandomChar(numbers);
    }

    // Fill the rest of the password length
    while (password.length < length) {
        password += getRandomChar(candidates);
    }

    // Optionally shuffle password to avoid predictable order
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);