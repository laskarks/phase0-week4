function highestScore(students) {

var skorFox = [];
var skorWolve = [];

if (students.length===0){
  return {}
}else {


for (var i = 0;i<students.length;i++) {
  if (students[i].class === 'foxes') {
    skorFox.push(students[i].score)
  }else if (students[i].class === 'wolves') {
    skorWolve.push(students[i].score)
  }
}

//Mencari score tertinggi tiap class
for (var j =0;j<skorFox.length;j++) {
  if (skorFox[0]>skorFox[1]) {
    skorFox.splice(1,1)
  }else if (skorFox[0]<skorFox[1]) {
    skorFox.splice(0,1)
  }
}
for (var k =0;j<skorWolve.length;k++) {
  if (skorWolve[0]>skorWolve[1]) {
    skorWolve.splice(1,1)
  }else if (skorWolve[0]<skorWolve[1]) {
    skorWolve.splice(0,1)
  }
}

//Memasukan nama score tertingg tiap class
var namaFox = {}
var namaWolve = {}
var rekap = []
var fox = {}
var gabungClass = {}

for (var l = 0;l<students.length;l++) {


if (students[l].class == 'foxes') {
  if (students[l].score == skorFox[0]) {
    namaFox.name = students[l].name;
    namaFox.score = students[l].score
    
    
  }
 
}//akhir if

if (students[l].class == 'wolves') {
  if (students[l].score == skorWolve) {
    namaWolve.name = students[l].name;
    namaWolve.score= students[l].score;
    
  }
}//akhirif wolve
  gabungClass.foxes = namaFox
  gabungClass.wolves = namaWolve
  

}//akhir loop

rekap.push(gabungClass)
return rekap
}
}//akhir function

/*
// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
*/

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}