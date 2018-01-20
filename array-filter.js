/* array filter
* array filter parametre olarak callback fonksiyon alabilir.
* fonksiyona gecilen ilk parametre itemları ikinci parametre index'leri döner.
* output olarak yeni bir array döner mutate etmez. yani kullanılan array'in içeriği değişmez. non-mutate diyebiliriz.
*/
const array = [1,2,3,4,5,6,7];
let newArray = array.filter( item => item < 4);
console.log(newArray);
//--> [ 5, 6, 7 ]

/*
* array filter usage with arrow function
*/
const array = [1,2,3,4,5,6,7,8];
const exampleFunction = item => item > 4;
const newArray = array.filter( exampleFunction );
console.log(newArray);
//--> [ 5, 6, 7, 8 ]
