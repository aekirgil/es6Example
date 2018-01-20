/* object values 
* object içerisinden value'lari almamıza yarıyor. array olarak döner
*/

const object = {
    key: 'value',
    key1: 'value1',
    key2: 'value2'
}

const values = Object.values(object);
console.log(values);
//--> [ 'value', 'value1', 'value2' ]
