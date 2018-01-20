/* object entries 
* array içinde object property'leri kadar array döner ve her array içinde
* 0 (sıfır)'ıncı index key 1 (bir)'inci index value olarak gelir.
*/

const object = {
    key: 'value',
    key1: 'value1',
    key2: 'value2'
}

const entries = Object.entries(object);
console.log(entries);
/* --> [ [ 'key', 'value' ],
*        [ 'key1', 'value1' ],
*        [ 'key2', 'value2' ] ]
*/


// Example
const object = {
    key: 'value',
    key1: 'value1',
    key2: 'value2'
}
const entries = Object.entries(object);
for (const [ key, value ] of entries) {
    console.log(`key: ${key}, value: ${value}`);
}
/* --> key: key, value: value
*     key: key1, value: value1
*     key: key2, value: value2
*/