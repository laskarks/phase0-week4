function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var biaya =2000;
  var hasil = [];
  
  for (var i = 0;i<arrPenumpang.length;i++) {
    listPenumpang = {}
    listPenumpang.penumpang = arrPenumpang[i][0];
    listPenumpang.naikDari = arrPenumpang[i][1];
    listPenumpang.tujuan = arrPenumpang[i][2];
    listPenumpang.bayar = biaya * (rute.indexOf(listPenumpang.tujuan) - rute.indexOf(listPenumpang.naikDari))

    hasil.push(listPenumpang)

  }

return hasil

}//akhir function

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""