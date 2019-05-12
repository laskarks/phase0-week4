function angkaPrima(angka) {
 
    var hasil = 0

    for (var i = 2;i<=angka;i++) {
        
        if (angka % i === 0) {
            hasil += i;
        } else if (angka % i != 0) {
            hasil += 0
        }
    }


if (hasil == angka) {
    return true;
}else if (hasil != angka) {
    return false
}

}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false