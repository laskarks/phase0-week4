function shoppingTime(memberId, money) {


    var product = ['Sepatu Stacattu', 'Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone']
    var harga = [1500000,500000,250000,175000,50000]
    var y = money
    var listBeli = []
    
  
        if (memberId == '') {
        return 'Mohon Maaf Toko X hanya berlaku untuk member'
    } else if(money<50000) {
        return 'Mohon Maaf uang tidak cukup'
    } else if (memberId != 0 && money>=50000) {
  
            for (var i = 0;i<product.length;i++) {

            if (money >= harga[i]) {
                listBeli.push(product[i])
                money = money - harga[i]
            }
           
        }
        var objBeli = {}
        objBeli.memberId = memberId;
        objBeli.money = y;
        objBeli.listPurchased = listBeli
        objBeli.changeMoney = money

        return objBeli
            
    }//akhir else

    else {
      return 'Mohon Maaf Toko X hanya untuk member saja'
    }
  
  



    }//Akhir function
    


    
    // TEST CASES
    console.log(shoppingTime('1820RzKrnWn08', 2475000));
      //{ memberId: '1820RzKrnWn08',
      // money: 2475000,
      // listPurchased:
      //  [ 'Sepatu Stacattu',
      //    'Baju Zoro',
      //    'Baju H&N',
      //    'Sweater Uniklooh',
      //    'Casing Handphone' ],
      // changeMoney: 0 }

    
    console.log(shoppingTime('82Ku8Ma742', 170000));
    //{ memberId: '82Ku8Ma742',
    // money: 170000,
    // listPurchased:
    //  [ 'Casing Handphone' ],
    // changeMoney: 120000 }
    console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
    console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
    console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
    