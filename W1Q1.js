function LetterChanges(str) { 

  // code goes here
  var shiftedCodes = []
  for (var i = 0; i < str.length; i++) {
    var newCharVal = 0
    var oldCharVal = str.charCodeAt(i)
    if (oldCharVal > 64 && oldCharVal < 90) { //UppercasesNotZ
      newCharVal = oldCharVal + 1

    } else if (oldCharVal > 97 && oldCharVal < 122) { //LowercasesNotZ
      newCharVal = oldCharVal + 1
    } else if (oldCharVal == 90) { //Uppercase Z
      newCharVal = 65
    } else if (oldCharVal == 122) { //Lowercase Z
      newCharVal = 97
    } else { //Non alphabet
      newCharVal = oldCharVal
    }
    shiftedCodes.push(newCharVal);
  }
  var vowelCap = []
  for (var j = 0; j < shiftedCodes.length; j++) { //Switch case
    switch (shiftedCodes[j]) {
      case 97:
      case 101:
      case 105:
      case 111:
      case 117:
        vowelCap.push(shiftedCodes[j] - 32)
        break;
      default:
        vowelCap.push(shiftedCodes[j])
        break;

    }
  
  }
  var out = []
  var outString = ""
  for (var k = 0; k < vowelCap.length; k++)  {
    out.push(String.fromCharCode(vowelCap[k]))
  }
  outString = out.join('');
  return outString; 

}
   
// keep this function call here 
console.log(LetterChanges(readline()));
