function ThirdGreatest(strArr) { 
  const sorted = strArr.sort((a,b) => b.length - a.length)
  return sorted[2]

}
   
// keep this function call here 
console.log(ThirdGreatest(readline()));
