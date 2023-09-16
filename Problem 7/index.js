//problems 7-1
for (let i = 1; i <= 100; i+=3) {
  console.log("Angka: " + i);
  if (i % 2 === 0) {
    console.log("genap");
  } else{
    console.log("ganjil");
  }
}

//problem 7-2
for (let i = 50; i <= 200; i += 5) {
  console.log("Angka: " + i);
  if (i % 3 === 0) {
    console.log("faktor 3");
  } else{
    console.log("tidak bisa dibagi 3");
  }
}

//problem 7-3
for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i)
  }
}
