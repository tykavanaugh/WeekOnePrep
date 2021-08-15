function CaesarCipher(str,num) { 
  var out = ""
  for (var i = 0 ; i < str.length ; i++){
    var val = str.charCodeAt(i)
    if (val > 96 && val < 122) {
      val += num
      if (val < 96){
        val += 26
      } else if (val > 122){
        val -= 26
      };
    };
    if (val > 64 && val < 90) {
      val += num
      if (val < 64){
        val += 26
      } else if (val > 90){
        val -= 26
      };
    };
    out += String.fromCharCode(val)
  };
  return out; 

}
   
// keep this function call here 
console.log(CaesarCipher(readline()));
