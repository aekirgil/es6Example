/* array some
* array every fonkiyonunun callback'inde bir fonksiyon çalıştırıyoruz
* ve bu fonksiyon içerisinde bir kural tanımlıyoruz array içerisinde ki elemanlardan herhangi biri 
* bu kurala uyuyorsa true uymuyorsa false dönüyor.
*/

// array içerisinde 5 ten büyük değerler olduğu için true dönüyor.
const array = [1,2,3,4,5,6,7];
const output = array.some( value => value > 5 );
console.log(output);
//--> true

// 7 den büyük değer var mı array'in içinde kontrol ediyoruz. 
// 7 den büyük değer olmadığı false dönüyor.
const array = [1,2,3,4,5,6,7];
const output = array.some( value => value > 7 );
console.log(output);
//--> false