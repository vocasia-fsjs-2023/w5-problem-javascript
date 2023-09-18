
const name = "azhar";
const age = 17;
const money = 50000;

const grape = 300000;
const juice = 50000;

if(name ===""){
    console.log("anda tidak boleh masuk");
}else{
    if(age<17){
        if(money < juice){
            console.log("uang tidak cukup, anda harus pulang");
        }else{
            const kembalian = money - juice;
            console.log("Anda bisa pesan juice. sisa uang anda "+ kembalian);
        }
    }else
    {
        if (money<grape){
            console.log ("Uang Anda Tidak Cukup anda harus Pulang");
        }else{
            const kembalian = money - grape;
            console.log("Anda bisa pesan anggur. sisa uang anda " + kembalian);
        }
    }
}