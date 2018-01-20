/* array find
* vermiş olduğumuz kurala göre array'in item'larını döner. 
*/

// object of array olarak işlem
const objectOfArray = [
    {
        id: 1,
        item: 'item'
    },
    {
        id: 2,
        item: 'item1'
    },
    {
        id: 3,
        item: 'item2'
    }
];

const data = objectOfArray.find(item => item.item === 'item2')
console.log(data);
//--> { id: 3, item: 'item2' }


//array olarak işlem
const array = [1,2,3,4,5,6];
const data = array.find(item => item === 6);
console.log(data);
//--> 6