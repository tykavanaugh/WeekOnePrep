function parseTime(str) {
  var hours = 0
  var minutes = 0
  if (str.slice(0,2) == 12){ //handle 12s
    if (str.slice(-2) == "am"){
      minutes = parseInt(str.slice(3,5))
      if (minutes == 0){
        return [24,0]
      };
    } else {
    hours = 12
    minutes = parseInt(str.slice(3,5))
    return [12,minutes]
    }
  };
  var clean = str.slice(0,-2)
  const timeArr = clean.split(":")
  if (str.slice(-2) == "am"){
    minutes = parseInt(timeArr[1])
    hours = parseInt(timeArr[0])
  } else {
    minutes = parseInt(timeArr[1])
    hours = parseInt(timeArr[0]) + 12
  };
  const returnArr = [hours,minutes]
  return returnArr
};

function timeCalc(arr0,arr1){
  if (arr0[0] == arr1[0] && arr0[1] < arr1[1]){//Same hour, same day
    return arr1[1] - arr0[1]
  } else if (arr0[0] == arr1[0] && arr0[1] > arr1[1]){  //Same hour, new day
    return arr1[1] - arr0[1] + 1440
  } else if (arr1[0] < arr0[0]){ //Different hour, new day
    return ((arr1[0] - arr0[0]) * 60) + arr1[1] - arr0[1] + 1440
  } else {//normal cases
    return ((arr1[0] - arr0[0]) * 60) + arr1[1] - arr0[1]
  }
};

function CountingMinutes(str) { 
  const timeArr = str.split("-")
  var time0Str = timeArr[0]
  var time1Str = timeArr[1]
  var time0 = []
  var time1 = []
  time0 = parseTime(timeArr[0])
  time1 = parseTime(timeArr[1])
  return(timeCalc(time0,time1))
}
// keep this function call here 
console.log(CountingMinutes(readline()));
