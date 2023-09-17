var name = 'Lee Know';
var age = 10;
var money = 1000000;

if (name === ' ' || name === '') {
    console.log("tidak boleh masuk");
  } else {
    if (age  < 17 ) {
        console.log("Anda hanya boleh memesan juice");
        if ( money < 50000) {
            console.log("Uang Anda tidak cukup. Anda harus pulang.");
        } else {
            console.log("Anda bisa pesan minum. Sisa uang Anda: " + (money - 50000));
        }
    } else {
      console.log("Anda hanya boleh memesan anggur");
      if ( money < 300000) {
        console.log("Uang Anda tidak cukup. Anda harus pulang.");
    } else {
        console.log("Anda bisa pesan minum. Sisa uang Anda: " + (money - 300000));
    }
    }
  }

