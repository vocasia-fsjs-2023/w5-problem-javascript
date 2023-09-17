var hasil = "";
// Kerjakan dibawah sini
var gatcha = Math.floor(Math.random() * 5) + 1;

switch (gatcha) {
  case 1:
    hasil = "coba lagi ya";
    break;
  case 2:
    hasil = "selamat kamu mendapatkan kupon sebanyak 5.";
    break;
  case 3:
    hasil = "selamat kamu mendapatkan kupon sebanyak 15.";
    break;
  case 4:
    hasil = "selamat kamu mendapatkan kupon sebanyak 50.";
    break;
  case 5:
    hasil = "WOW, kamu menang jackpot! Selamat!!";
    break;
  default:
    hasil = "Tidak ada hasil yang valid.";
    break;
}
// Jangan melewati sini
console.log(hasil);
