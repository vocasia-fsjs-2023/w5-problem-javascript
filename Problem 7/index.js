for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " - GENAP");
  } else {
    console.log(i + " - GANJIL");
  }
}

for (let i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(i + " - Faktor 3");
  } else {
    console.log(i + " - Tidak Bisa dibagi 3");
  }
}

for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
