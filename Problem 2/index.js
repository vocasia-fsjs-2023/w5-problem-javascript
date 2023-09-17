var Name='Zidni';
var age= 17;
var money= 75000;

var hargaJuice = 50000;
var hargaAnggur= 300000;

if (Name){
    if(age <= 17 && money >= hargaJuice){
        console.log('Anda bisa pesan juice.' + ' Sisa uang anda = ' + (money - hargaJuice));
    }else if (age >= 17 && money >= hargaAnggur){
        console.log('Anda bisa pesan Anggur.' + ' Sisa uang anda = ' + (money - hargaAnggur));
    }else{
        console.log('Uang tidak cukup. Anda harus pulang.');
    }
}else{
    console.log('Anda tidak boleh masuk');
}