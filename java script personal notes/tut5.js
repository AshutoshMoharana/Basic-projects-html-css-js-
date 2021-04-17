console.log('hello this is step 4{type consversion and type coercion}')

//1. TYPE CONVERSION__________________

let myvar;
myvar = 34;
console.log(myvar);
console.log(typeof myvar);


// string conversion:
//either using String() or by using toString(); 

myvar1 = String(34);
console.log(typeof myvar1);

//string conversion for boolean:
let heroalom = String(true);
console.log(heroalom, typeof heroalom);

//smilarly for date string conversion:

let datestrng = String(new Date())

console.log(datestrng , typeof new Date());


//exactly for array string conversion and length ;

let array = String([2,34,65,75,34,34])
console.log(array.length, typeof array);


//convertion of string using .toString():

let helloworld  = 343433;

console.log(helloworld.toString())

//lets using Number conversion

let stri= Number('346');
let stri1= Number('346');


stri = Number(false);
stri1 = Number(true);


console.log(stri, (typeof stri));
console.log(stri1, (typeof stri1));


//lets useing .toFixed() its ommits decimal values and if we put number in toFixed parameters then its shows decimal values full ex:

let number = 34.35;
console.log(number.toFixed(10))

// 2.TYPE COERCION:

let mystr = '344';
let mynum = 34;

console.log(mystr + mynum);
