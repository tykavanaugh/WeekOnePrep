function AlphabetSoup(str) { 
  arr = []
  for (var i = 0 ; i < str.length ; i++) {
    arr.push(str[i])
  }
  arr.sort()
  var out = arr.join('')
  return out; 

}
   
// keep this function call here 
console.log(AlphabetSoup(readline()));
