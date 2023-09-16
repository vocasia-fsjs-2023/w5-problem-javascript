var nama = "Shefia";
var nilai = 100;

// Memeriksa Nilai Apakah Valid
if (nilai >= 0 && nilai <= 100) {
    // Deskripsi Nilai
    var DeskripsiNilai;
    if (nilai >= 80 && nilai <= 100) { // Check for A grade first
        DeskripsiNilai = "A";
    } else if (nilai >= 65 && nilai < 80) {
        DeskripsiNilai = "B";
    } else if (nilai >= 50 && nilai < 65) {
        DeskripsiNilai = "C";
    } else if (nilai >= 36 && nilai < 50) {
        DeskripsiNilai = "D";
    } else {
        DeskripsiNilai = "E";
    }
    console.log("Nama Mahasiswa: " + nama);
    console.log("Nilai Mahasiswa: " + nilai);
    console.log("Deskripsi Nilai: " + DeskripsiNilai);
} else {
    console.log("Nilai Invalid");
}
