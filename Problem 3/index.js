var nama = "Andreas";
var nilai = 34;

if (nilai >= 0 && nilai <= 100) {
    if (nilai >= 80) console.log(`Nama: ${nama}\nNilai: A`)
    else if (nilai >= 65) console.log(`Nama: ${nama}\nNilai: B`)
    else if (nilai >= 50) console.log(`Nama: ${nama}\nNilai: C`)
    else if (nilai >= 35) console.log(`Nama: ${nama}\nNilai: D`)
    else console.log(`Nama: ${nama}\nNilai: E`)
} else {
    console.log("Nilai Invalid")
}
