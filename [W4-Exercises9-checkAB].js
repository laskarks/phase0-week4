function checkAB(num) {

var a = num.indexOf('b') - num.indexOf('a');


if (a<=4 && a>0) {
  return true;
}else {
  return false
}


}//akhir function

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false