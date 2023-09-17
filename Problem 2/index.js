
// variabel pengunjung
const pengunjung = {
     name : "romli",
     age  : 21,
     money : 2000000
    };

// harga juice dan anggur
const hargaJuice = 50000;
const hargaAnggur = 300000;

const sisa = pengunjung.money - hargaAnggur;

if (!pengunjung.name) {
    console.log("Anda TIdak Boleh Masuk!")
} else {
    if (pengunjung < 17) {
        if (pengunjung.money < hargaJuice) {
            console.log("Uang Anda tidak cukup. Anda harus pulang");
        }else{
            const sisa = pengunjung.money - hargaJuice;
            console.log(`Anda bisa pesan minum. Sisa uang anda: ${sisa}`);
        }
    } else {
        if (pengunjung.money < hargaAnggur) {
            console.log("Uang Anda tidak cukup. Anda harus pulang");
        }else{
            const sisa = pengunjung.money - hargaAnggur;
            console.log(`Anda bisa pesan minum. Sisa uang anda: ${sisa}` );
        }
    }
}