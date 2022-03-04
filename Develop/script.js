var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Special = []

// Assignment code here

var gen =function(){

var passSize = window.prompt ("How long will the password be ?");
if (passSize >= 8 && passSize <= 128 ){
      console.log(passSize) // test
}
else{
  window.alert("password needs to be between 8 - 128 ");
  gen();
}


let isLower = window.confirm("Do you want lowercase?");
console.log ("lower case, " +isLower);
let isUpper = window.confirm("Do you want Uppercase?");
console.log ("upper case, " +isUpper);
let isSpecial = window.confirm("Do you want Special cases?");
console.log ("Special case, " +isSpecial);

 //clear temp and pass
let temp = '';
let password = '';



}


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

debugger;
gen();