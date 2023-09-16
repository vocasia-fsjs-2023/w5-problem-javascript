var hasil = Math.floor(Math.random() * 5) + 1;

// Kerjakan dibawah sini
switch (hasil) {
  case 1:
    hasil = "coba lagi ya";
    break;
  case 2:
    hasil = "selamat kamu mendapatkan kupon sebanyak 5";
    break;
  case 3:
    hasil = "selamat kamu mendapatkan kupon sebanyak 15";
    break;
  case 4:
    hasil = "selamat kamu mendapatkan kupon sebanyak 50";
    break;
  case 5:
    hasil = "WOW, kamu menang jackpot! Selamat!!";
    break;
  default:
    hasil = "Angka acak tidak valid";
    break;
}

// Menampilkan hasil
console.log(hasil);
