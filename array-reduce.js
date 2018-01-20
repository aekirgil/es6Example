/* array reduce
* reduce iki parametre alır; Biri callback fonksiyonu diğeri initial value'dur.
* callback fonksiyonu 4 parametre alır, bunlar " previousValue, currentValue, currentIndex ve array ".
* previousValue fonksiyondan return edilmiş bir önceki işlemin value değerini tutar. Reduce fonksiyonu ilk  
* çalıştığında daha önceden return edilmiş bir değer olmadığı için fonksiyonda initial value'u "0"(sıfır) olarak set ettim.
* reduce'un nasıl çalıştığına bakacak olursak. ilk çalıştığında initial value previousValue'ya set ediliyor previosValue 
* ile currentValue aşağıdaki fonksiyonda toplama işlemini gerçekleştirip sonucu previousValue'ya set ederek array'den
* bir sonraki değeri currentValue'ya atayarak aynı işlemi devam ettiriyor.
*/
const array = [1,2,3,4,5,6,7,8,9,10];
const total = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(total);
//--> 55