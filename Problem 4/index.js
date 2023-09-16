var hasil = "";

// Kerjakan dibawah sini
// random integer dari 0 ke 5:
var random = Math.floor(Math.random() * 6) ;

switch (random) {
  case 1:
    hasil = " 1: coba lagi ya";
    break;
  case 2:
    hasil = " 2 : Selamat kamu mendapatkan kupon sebanyak 5";
    break;
  case 3:
    hasil = " 3: Selamat kamu mendapatkan kupon sebanyak 15";
    break;
  case 4:
    hasil = " 4: Selamat kamu mendapatkan kupon sebanyak 50";
    break;
  case 5:
    hasil = " 5: WOW, kamu menang jackpot! Selamat!!";
    break;
  default:
    hasil = "Angka acak di luar rentang 1-5";
}
// Jangan melewati sini
console.log(hasil);
