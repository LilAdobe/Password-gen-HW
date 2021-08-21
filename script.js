// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase = letters.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()-_=+\|]}[{~`';:/?.>,<";
var stored = [];
var hasLowerCase = true;
var hasUpperCase = true;
var hasNumeric = true;
var hasSpecial = true;

function generatePassword() {
  var length = 11;
  var password = "";
  var possible = "";
   

  hasLowerCase = confirm('Lower?');
  hasUpperCase = confirm('Upper?');
  hasNumeric = confirm('Numeric?');
  hasSpecial = confirm('Special?')


  // if (hasLowerCase){ dataType.push(lowercase); } if (upperCase) {dataType.push(uppercase);} if (numeric) { dataType.push(numeric);} if (se)

  if (hasLowerCase) {
    var random = Math.floor(Math.random() * letters.length);
    var selected = letters[random];
    possible = possible.concat(letters);
    stored.push(selected);
  }

  if (hasUpperCase) {
    var random = Math.floor(Math.random() * uppercase.length);
    var selected = uppercase[random];
    possible = possible.concat(letters);
    stored.push(selected);
  }

  if (hasNumeric) {
    var random = Math.floor(Math.random() * numeric.length);
    var selected = numeric[random];
    possible = possible.concat(numeric);
    stored.push(selected);
  }

  if (hasSpecial) {
    var random = Math.floor(Math.random() * special.length);
    var selected = special[random];
    possible = possible.concat(special);
    stored.push(selected);
  }

  for (var i = 0; i < length - stored.length; i++) {
    var random = Math.floor(Math.random() * possible.length);
    //var arrays = dataType[any];
    //var any = Math.floor(Math.random() * arrays.length);

    password += possible[random];
  }

  password += stored.join('');

  console.log('POSSIBLE;', possible);
  console.log('PASSWORD;', password);
  console.log('STORED;', stored);
  stored = [];

  return password;

}
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
