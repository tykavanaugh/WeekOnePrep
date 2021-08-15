function DistinctList(arr) { 
  let out = 0
  let unique = []
  for (var i = 0 ; i < arr.length ; i++){
    var notFound = true;
    for (var j = 0 ; j < unique.length ; j++){
      if (arr[i] == unique[j]){
        out++
        notFound = false
      };
    };
    if (notFound == true){
      unique.push(arr[i])
    };
  };
  return out
}
   
// keep this function call here 
console.log(DistinctList(readline()));
