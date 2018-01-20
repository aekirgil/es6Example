/* object method properties
* object içerisinde fonksiyon tanımlama syntax'ı diyebiliriz. object içerisinde aşağıdaki syntax'ta  da tanımlayabilirken 
* object method properties ile aşağıda ikinci örnekte gördüğümüz gibi bir syntax da kullanabiliriz.
*/
const object = {
    uppercase: str => str.toUpperCase(),
    lowercase: str => str.toLowerCase()
};

const uppercase = object.uppercase('little'),
      lowercase = object.lowercase('BIG');
console.log(uppercase);
//--> LITTLE
console.log(lowercase);
//--> big


//object method properties
const object = {
    uppercase(str) {
        return str.toUpperCase();
    },
    lowercase(str){
        return str.toLowerCase();
    }
};

const uppercase = object.uppercase('litte'),
      lowercase = object.lowercase('BIG');
console.log(uppercase);
//--> LITTE
console.log(lowercase);
//--> big