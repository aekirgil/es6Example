/* object keys 
* object içerisinden key'leri almamıza yarar. array olarak döner.
*/

const object = {
    key: 'value',
    key1: 'value1',
    key2: 'value2'
}

const keys = Object.keys(object);
console.log(keys);
//--> [ 'key', 'key1', 'key2' ]