function digitPerkalianMinimum(angka) {

var deret = []
var deret2 = []
var deret3 = []

for (var i = 1;i<=angka;i++) {
  if (angka%i==0) {
    deret.push(i)
  }
}

for (var a = 0;a<deret.length;a++) {
  for (var b = 0;b<deret.length;b++) {
    if (deret[a]*deret[b]==angka) {
      deret2.push(deret[a].toString()+ deret[b].toString()) 
      
    }
  }
}

for (var c = 0;c<deret2.length;c++) {
  deret3.push(Number(deret2[c]))
  deret3.sort(function(value1,value2){return value1>value2})
  
}

var deret4 = []

for (var d = 0;d<deret3.length;d++) {
  deret4.push(deret3[d].toString())
}

return deret4[0].length


}//akhir function

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2