/* object assign 
* object'i başka bir object'e kopyalamayı sağlar ama sadece key ve value'lar 
* kopyalanır ve iki object'nin referansları birbirinden farklıdır. 
* Yani iki object'de de oluşan değişiklikler birbirini etkilemez.
* Object.assign(target, source)
* target yeni oluşturalacak object'dir. Genellikle boş object ( {} ) vererek kullanılıyor
* source kopyalanacak object'dir. 
* object assign deep copy'de çalışmamaktadır. yani object içinde object var ise
* object assign ile copy yaptığımızda ve en içteki object'i guncellediğimizde source'ta güncelleniyor
* bunu aşağıda deep copy örneğinde göreceğiz.
*/

/*const object = {
    key: 'value',
    key1: 'value1',
    key2: 'value2'
};
const output = Object.assign({}, object);
console.log(output);*/
//--> { key: 'value', key1: 'value1', key2: 'value2' }


/* deep copy
* Aşağıdaki örnekte gördüğümüz gibi iç içe object'lerimiz de object assign düzgün çalışmadı.
* Bu tip object'lerde  variable = JSON.parse(JSON.stringify(sourceObject))
*/
const object = {
    key : {
        innerKey: 'innerValue'
    }
}

const output = Object.assign({}, object);
const updateOutputValue = output.key.innerKey = 'newInnerValue';
console.log('output: ', output);
//--> { key: { innerKey: 'newInnerValue' } }
console.log('object: ', object);
//--> { key: { innerKey: 'newInnerValue' } }

// true
const object = {
    key: {
        innerKey: 'innerValue'
    }
}

const output = JSON.parse(JSON.stringify(object));
const updateOutputValue = output.key.innerKey = 'newInnerValue';
console.log('output: ', output);
//--> output:  { key: { innerKey: 'newInnerValue' } }
console.log('object: ', object);
//--> object:  { key: { innerKey: 'innerValue' } }




