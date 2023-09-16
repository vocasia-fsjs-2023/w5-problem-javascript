var hasil = "";
// Kerjakan dibawah sini
var angka = Math.floor(Math.random() * 6) ;

console.log("Angka : " + angka)

  switch (angka) {
    case 1:
      hasil = "coba lagi ya";
      break;
    case 2:
      hasil = "Selamat kamu mendapatkan kupon sebanyak 5";
      break;
    case 3:
      hasil = "Selamat kamu mendapatkan kupon sebanyak 15";
      break;
    case 4:
      hasil = "Selamat kamu mendapatkan kupon sebanyak 50";
      break;
    case 5:
      hasil = "WOW, kamu menang jackpot! Selamat!!";
      break;
    default:
      hasil = "Angka Invalid";
  }
// Jangan melewati sini
console.log(hasil);
