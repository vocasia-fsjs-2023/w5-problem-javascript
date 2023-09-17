// Problem 3-1
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

console.log("Problem 3-1", "<lakukan disini>");

// Problem 3-2
var word2 = "wow JavaScript is so cool";
var exampleFirstWord = word2[0] + word2[1] + word2[2];
var secondWord; // do your own!
var thirdWord; // do your own!
var fourthWord; // do your own!
var fifthWord; // do your own!

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

// Problem 3-3
var word3 = "wow JavaScript is so cool";
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3; // do your own!
var thirdWord3; // do your own!
var fourthWord3; // do your own!
var fifthWord3; // do your own!

console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + secondWord3);
console.log("Third Word: " + thirdWord3);
console.log("Fourth Word: " + fourthWord3);
console.log("Fifth Word: " + fifthWord3);

// Problem 3-4
var word4 = "wow JavaScript is so cool";
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4; // do your own!
var thirdWord4; // do your own!
var fourthWord4; // do your own!
var fifthWord4; // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);
console.log("Second Word: " + secondWord4);
console.log("Third Word: " + thirdWord4);
console.log("Fourth Word: " + fourthWord4);
console.log("Fifth Word: " + fifthWord4);
//problem 5
var nama = "Jamil"; 
var deskripsiNilai;

if (nilai >= 80 && nilai <= 100) {
  deskripsiNilai = "A";
} else if (nilai >= 65 && nilai <= 79) {
  deskripsiNilai = "B";
} else if (nilai >= 50 && nilai <= 64) {
  deskripsiNilai = "C";
} else if (nilai >= 35 && nilai <= 49) {
  deskripsiNilai = "D";
} else if (nilai >= 0 && nilai <= 34) {
  deskripsiNilai = "E";
} else {
  deskripsiNilai = "Nilai Invalid";
}

console.log("Nama siswa: " + nama);
console.log("Nilai: " + nilai);
console.log("Deskripsi Nilai: " + deskripsiNilai);
