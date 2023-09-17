var kata = "I love Javascript";

// Membuat fungsi untuk memeriksa apakah sebuah karakter adalah huruf vokal
function isVowel(char) {
  return 'aeiouAEIOU'.indexOf(char) !== -1;
}

// Membuat variabel baru untuk menyimpan kata hasil penggantian
var hasil = "";

// Loop melalui setiap karakter dalam kata
for (var i = 0; i < kata.length; i++) {
  var char = kata[i];
  
  // Jika karakter adalah huruf vokal, ganti dengan "$", jika tidak, biarkan seperti itu
  if (isVowel(char)) {
    hasil += '$';
  } else {
    hasil += char;
  }
}

// Menggantikan nilai kata dengan hasil yang sudah dimodifikasi
kata = hasil;

console.log(kata);