// Assignment code here
// Get MVP first 
// clean up later

var generatePassword =function(){


  let passLen = parseInt(window.prompt ("How long will the password be ?"));
  if (passLen >= 8 && passLen <= 128 ){
        console.log(passLen) // testing delete later

        let isLower = window.confirm("Do you want lowercase?")
        let isUpper = window.confirm("Do you want Uppercase?") 
        let isNum = window.confirm("Do you want numerical values?")
        let isSpecial = window.confirm("Do you want Special cases?")
      
      
        //clear temp and pass storage
        let temp = '';
        let password = '';
      
        // check 
        if(isLower){
          temp += 'abcdefghijklmnopqrstuvwxyz'
        }
        if(isUpper){
          temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if(isNum){
          temp += '0123456789'
        }
        if(isSpecial){
          temp += '!@#$%^&*()?'
        }
      
        for(let i = 0; i < passLen; i++){
          // temp [] is now a arry with stored info from above 
          // loop temp arry by the length of passLen
          // random number temp arry will get stored into password until loop stops
          password += temp[ Math.floor( Math.random() * temp.length)]
        }
      
        return password;

  }
  else{
    window.alert("password needs to be between 8 - 128 ");
    generatePassword();
  }

};


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

// debugger;
