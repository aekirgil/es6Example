/* object computed property names
* object oluştururken object key'lerimizi dinamik yönetmek istediğimiz de 
* aşağıdaki syntax ile dinamik object key oluşturabiliyoruz. çıktıda da göreceğimiz gibi
* key değişkeninin value'su object'in key'i oluyor.
*/
const key = 'name';
const user = {
    id: 1,
    location: 'Istanbul',
    [key]: 'John'
}
console.log(user);
//-->{ id: 1, location: 'Istanbul', name: 'John' }