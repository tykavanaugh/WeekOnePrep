function FibonacciChecker(num) { 
  var seq = [0,1,1]
  var i = 1
  do {
    var n = seq[seq.length - 1] + seq[seq.length - 2]
    seq.push(n)
  } while (seq[seq.length - 1] < num);
  if ( seq[seq.length - 1] == num) {
    return "yes"
  } else {
    return "no"
  }
}

   
// keep this function call here 
console.log(FibonacciChecker(readline()));
