const angkaRandom = Math.floor(Math.random() * 5) + 1;

let pesan = "";

switch (angkaRandom) {
  case 1:
    pesan = "Coba lagi ya";
    break;
  case 2:
    pesan = "Selamat kamu mendapatkan kupon sebanyak 5";
    break;
  case 3:
    pesan = "Selamat kamu mendapatkan kupon sebanyak 15";
    break;
  case 4:
    pesan = "Selamat kamu mendapatkan kupon sebanyak 50";
    break;
  case 5:
    pesan = "WOW, kamu menang jackpot! Selamat!!";
    break;
  default:
    pesan = "Angka acak di luar rentang 1-5";
    break;
}

console.log(pesan);