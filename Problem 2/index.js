var Name='andara';
var age= 20;
var money= 400000;

var hargaJuice = 50000;
var hargaAnggur= 300000;

if (Name){
    if(age <= 17 && money >= 50000){
        console.log('Anda bisa pesan juice.' + ' Sisa uang anda = ' + (money - hargaJuice));
    }else if (age >= 17 && money >= 300000){
        console.log('Anda bisa pesan Anggur.' + ' Sisa uang anda = ' + (money - hargaAnggur));
    }else{
        console.log('Uang tidak cukup. Anda harus pulang.');
    }
}else{
    console.log('Anda tidak boleh masuk');
}