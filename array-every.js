/* array every
* array every fonkiyonunun callback'inde bir fonksiyon çalıştırıyoruz
* ve bu fonksiyon içerisinde bir kural tanımlıyoruz array içerisinde ki elemanlardan tamamı
* bu kurala uyuyorsa true uymuyorsa false dönüyor.
*/

const array = [1,2,3,4,5,6,7];
const output = array.every( value => value >=1 );
console.log(output);
//--> true

// 7 den büyük değer var mı array'in içinde kontrol ediyoruz.
const array = [1,2,3,4,5,6,7];
const output = array.every( value => value > 7 );
console.log(output);
//--> false