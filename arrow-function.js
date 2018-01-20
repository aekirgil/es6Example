/* es5 way to decalare function 
*
*/
function exampleFunction(parameter, parameter1) {
    console.log(parameter, parameter1);
}
exampleFunction(1,2);
//--> 1 2

/* arrow function
* there are few usage to arrow function 
*/
const exampleFunction = () => 1 + 2;
console.log(exampleFunction())
//-->3

const exampleFunction = (parameter, parameter1) => parameter * parameter1;
console.log(exampleFunction(2,3));
//-->6

const exampleFunction = parameter => parameter ** 2;
console.log(exampleFunction(4));
//-->16

const exampleFunction = (parameter,parameter1) => { return parameter * parameter1 };
console.log(exampleFunction(4,2));
//-->8

const exampleFunction = (parameter,parameter1) => (parameter + parameter1);
console.log(exampleFunction(2,5));
//-->7

/*
* if the function returns object, you can write the following old syntax
*/
const exampleFunction = (parameter, parameter1) => {
    return {
        key: parameter,
        key1: parameter1
    }
}
console.log(exampleFunction(1,2));
//--> { key:1,key1:2 };
//or the new way to return object, the point we need to look out for we have to capsulate the curly brackets with brackets.
const exampleFunction = (parameter, parameter1) => ({
    key: parameter,
    key1: parameter1
});
console.log(exampleFunction(1,2));
//--> { key:1, key1: 2 };
// this is way to return array.
const exampleFunction = (parameter, parameter1) => [parameter,parameter1];
console.log(exampleFunction(2,3));

/* function set default value
* you can set default value as function parameter
*/
const exampleFunction = (parameter = 'default value') => ({
    key: parameter,
    key1: 'value1' 
});
console.log(exampleFunction('value'));
//--> { key: 'value', key1: 'value1' }
console.log(exampleFunction());
//--> { key: 'default value', key1: 'value1' }

/* spread & arrow function
* spread usage inside the arrow fınction
*/

const exampleFunction = (parameter, ...parameter1) => ({
    key: parameter,
    parameter1
});
console.log(exampleFunction('value', 'value1', 'value2', 'value3'));
//--> { key: value, parameter1: ['value1',value2,value3] }