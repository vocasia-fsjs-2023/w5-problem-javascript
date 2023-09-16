// Fungsi untuk mengganti huruf vokal menjadi "$"
function gantiVokal(kata) {
    // Membuat variabel hasil untuk menyimpan hasil penggantian
    let hasil = '';
  
    // Membuat array huruf vokal
    const vokal = ['a', 'e', 'i', 'o', 'u'];
  
    // Menggunakan loop untuk mengiterasi setiap karakter dalam kata
    for (let i = 0; i < kata.length; i++) {
      // Mengecek apakah karakter saat ini adalah huruf vokal
      if (vokal.includes(kata[i])) {
        // Jika huruf saat ini adalah huruf vokal, tambahkan "$" ke hasil
        hasil += '$';
      } else {
        // Jika bukan huruf vokal, tambahkan karakter aslinya ke hasil
        hasil += kata[i];
      }
    }
  
    return hasil;
  }
  
  // Contoh penggunaan
  const kata = 'i love javascript';
  const hasil = gantiVokal(kata);
  console.log(hasil); // Output: "$ l$v$ j$v$scr$pt"