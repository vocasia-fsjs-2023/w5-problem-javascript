var nama = 'andara';
var nilai = 90;

if(nilai){
    if(nilai <=100 && nilai >= 80){
    console.log((nama) + ' Anda mendapat A');
    }else if(nilai >= 65 && nilai <=79 ){
    console.log((nama) + ' Anda mendapat B');
    }else if(nilai >= 50 && nilai  <=64){
    console.log((nama) + ' Anda mendapat C');
    }else if(nilai >=35 && nilai <=49){
    console.log((nama) + ' Anda mendapat D');
    }else if(nilai >= 0 && nilai <=34){
    console.log((nama) + ' Anda mendapat E');
    }else{
        console.log('Nilai Invalid');
    }
}