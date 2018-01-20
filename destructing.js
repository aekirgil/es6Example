/* destructing
* shortcut to get specific property or item from the object or array.
*/
/*  -- usage for object --  */
const object = {
    key: 'value',
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: {
        key: value
    }
}

//instead
const key = object.key;
console.log(key);
//-->value
//or
const key2 = object.key2;
console.log(key2);
//-->value2
//correct usage
const { key, key2 } = object;
console.log(key, key2);
//-->value value2
//set new property, but it dont set the new property to object
const { key, key2, key5 = 'value5' } = object;
console.log(key, key2, key5);
//-->value value2 value5
//usage for nested object
const { key4: { key } } = object;
console.log(key);
//-->value
//or
const { key4: { key: newKey } } = object;
console.log(newKey);
//-->value

/* -- usage for array -- */
const array = [1,2,3];
//instead
const array0 = array[0];
console.log(array0)
//-->1
//correct usage
const [array0,array1,array2] = array;
console.log(array0,array1,array2);
//-->1 2 3
