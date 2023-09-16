var nama = "Romli";
var nilai = 90;

if (nilai < 0 || nilai > 100) {
    console.log("Nilai Invalid")
    
} else {
    let keterangan = "";

    if (nilai >= 80 &&  nilai <= 100) {
        keterangan = "A";
    } else if (nilai >= 65 &&  nilai <= 79 ){
        keterangan  = "B";
        
    }else if (nilai >= 50 && nilai <= 64) {
        keterangan = "C";

    }else if (nilai >= 35 &&  nilai <= 49) {
        keterangan = "D";

    }else{
        keterangan = "E"
    }

    console.log(`Nama Mahasiswa : ${nama} `);
    console.log(`Nilai : ${nilai}`);
    console.log(`Keterangan : ${keterangan}`)
}