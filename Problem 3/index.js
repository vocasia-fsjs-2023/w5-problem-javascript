var nama = "Syafril";  // Ganti dengan nama siswa yang Anda inginkan
var nilai = 75;             // Ganti dengan nilai yang Anda inginkan

// Periksa apakah nilai dalam rentang yang valid (0-100)
if (nilai < 0 || nilai > 100) {
    console.log("Nilai Invalid");
} else {
    // Tentukan deskripsi nilai berdasarkan rentang
    var deskripsiNilai;
    if (nilai >= 80 && nilai <= 100) {
        deskripsiNilai = "A";
    } else if (nilai >= 65 && nilai <= 79) {
        deskripsiNilai = "B";
    } else if (nilai >= 50 && nilai <= 64) {
        deskripsiNilai = "C";
    } else if (nilai >= 35 && nilai <= 49) {
        deskripsiNilai = "D";
    } else {
        deskripsiNilai = "E";
    }

    // Tampilkan deskripsi nilai dan nama siswa
    console.log("Nilai " + nama + ": " + deskripsiNilai);
}
