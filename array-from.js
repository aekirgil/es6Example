/* array from
* sıfırdan array oluşturmak ve başka bir arrayden array türetmek için kullanılabilir.
* ilk parametre olarak array'in uzunluğunu veriyoruz ve sonra nasıl oluşturmak istiyorsak
* kuralı oluşturuyoruz. aşağıda ki fonksiyonda en küçük 10 tek sayıyı içeren bir array oluşturacağız.
*/

const array = Array.from({ length: 10 }, (value, index) => (index * 2) + 1);
console.log(array);
//--> [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]