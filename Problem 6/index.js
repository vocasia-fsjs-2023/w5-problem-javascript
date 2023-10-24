function gantihuruf(kata) {

    let result = '';
  
    for (let i = 0; i < kata.length; i++) {
      let char = kata[i];
  
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        result += '$';
      } else {
        result += char;
      }
    }
  
    return result;
  }
  

  var kata = 'i love javascript';
  var hasil = gantihuruf(kata);
  console.log(hasil);
  