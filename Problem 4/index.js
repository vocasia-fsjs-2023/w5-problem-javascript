var hasil = "";
// Kerjakan dibawah sini
/*1. Generate a random number between 1 and 5 using Math.random() and Math.floor().
2. Assign the random number to a variable, let's call it "randomResult".
3. Use a SWITCH-CASE statement to evaluate the value of "randomResult".
4. Based on the value of "randomResult," perform the following actions:
   - CASE 1:
     - Display "coba lagi ya"
     - Break
   - CASE 2:
     - Display "selamat kamu mendapatkan kupon sebanyak 5"
     - Break
   - CASE 3:
     - Display "selamat kamu mendapatkan kupon sebanyak 15"
     - Break
   - CASE 4:
     - Display "selamat kamu mendapatkan kupon sebanyak 50"
     - Break
   - CASE 5:
     - Display "WOW, kamu menang jackpot! Selamat!!"
     - Break
   - DEFAULT (optional, for handling unexpected values):
     - Display "Hasil tidak valid"
5. End of SWITCH-CASE statement.8*/

// Generate a random number between 1 and 5
var hasil = Math.floor(Math.random() * 5) + 1;

// Use SWITCH-CASE to evaluate the randomResult
switch (hasil) {
  case 1:
    console.log("coba lagi ya");
    break;
  case 2:
    console.log("selamat kamu mendapatkan kupon sebanyak 5");
    break;
  case 3:
    console.log("selamat kamu mendapatkan kupon sebanyak 15");
    break;
  case 4:
    console.log("selamat kamu mendapatkan kupon sebanyak 50");
    break;
  case 5:
    console.log("WOW, kamu menang jackpot! Selamat!!");
    break;
  default:
    console.log("Hasil tidak valid");
}


// Jangan melewati sini
console.log(hasil);
