/* object property shorthand
* objenizde yer alan key'in value'su bir değişken olarak atanacaksa ve key ile value'ya 
* atanacak değişken aynı isimlendirmeye sahip ise aşağıdaki şekilde yazabiliriz.
*/

//şu şekilde ed yazabiliriz.
const name = 'emre',
const user = {
    id: 1,
    location: 'Istanbul',
    name : name
};

//kısa yazım olarak aşağıdaki şekilde de yazabiliriz. 
const name = 'ahmet';
const user = {
    id: 1,
    location: 'Istanbul',
    name,
}

//aşağıdaki örnekte tüm key'ler value'larını dışarıdan değişken olarak alsın.
const name = 'ahmet';
const location = 'Istanbul';
const id = 1;

const user = {
    id,
    location,
    name
}
console.log(user);
//--> { id: 1, location: 'Istanbul', name: 'ahmet' }