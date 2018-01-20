/* template literals
* old ways template literals
*/
let variable = 'hello';
let variable1 = 'world!';
console.log(variable + ' ' + variable1 + 'from the computer!');
//--> hello world from this computer!

/* new way to template literals
* back ticks'lerin arasına değişkenleri ${ } syntax'ı ile yazabilirsin ve stirng ifadelerle değişkenlerin arasına 
* hiç bir noktalama işareti koymak zorunda değilsin.  
*/

let variable = 'hello';
let variable1 = 'world';
console.log(`${variable} ${variable1} from this computer!`);
//--> hello world from this computer!