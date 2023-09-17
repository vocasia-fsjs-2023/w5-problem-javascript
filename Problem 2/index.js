function order({money, menu}) {
    if(menu == "anggur") {
        if(money >= 300000) {
            let remain = money - 300000;
            console.log("Anda bisa pesan minum. Sisa uang anda: "+remain);
        } else {
            console.log(`Uang tidak cukup. Anda harus pulang.`);
        }
    } else {
        if(money >= 50000) {
            let remain = money - 50000;
            console.log("Anda bisa pesan minum. Sisa uang anda: "+remain);
        } else {
            console.log(`Uang tidak cukup. Anda harus pulang.`);
        }
    }
}

function condition({age, name, money}) {
    if (name !== "") {
        if(age <=17 ){
            order({money: money, menu: "juice"});
        } else {
            order({money: money, menu: "anggur"});
        }
    } else {
        console.log("Anda tidak boleh masuk!")
    }
}

condition({age: 18, name: "as", money: 300000});