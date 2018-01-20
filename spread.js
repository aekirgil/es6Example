/*spread
*
*/
const array = [1,2,3,4];
console.log(...array);
//--> 1 2 3 4
const [ index, index1, ...otherIndex ] = array;
console.log(...otherIndex);
//--> 3 4
console.log(otherIndex);
//--> [3,4]
