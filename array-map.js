/* array map
*   
*/
const array = [1,2,3,4,5,6,7,8];
const newArray = array.map( item => item*2 );
console.log(newArray);
//--> [ 2, 4, 6, 8, 10, 12, 16 ]

/*
*
*/
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

const newArray = objectOfArray.map( item => item.id );
console.log(newArray);
//--> [ 1, 2, 3 ]
const newArray = objectOfArray.map( item => item.item);
console.log(newArray);
//--> [ 'item', 'item1', 'item2' ]