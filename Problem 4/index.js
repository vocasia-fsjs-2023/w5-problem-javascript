var hasil = "";
// Kerjakan dibawah sini
    const rand = Math.floor(Math.random() * 5) + 1;
    console.log(rand);
    switch(rand) {
      case 1:
        hasil ="coba lagi ya";
        break;
      case 2:
        hasil ="selamat kamu mendapatkan kupon sebanyak 5";
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
    };
// Jangan melewati sini
console.log(hasil);
