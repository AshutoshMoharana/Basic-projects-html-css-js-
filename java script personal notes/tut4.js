console.log('Wellcom to hello world');

// 1. premitive data types:

// string:
var name = 'Hacking';
console.log('my string is :'+ name );

//using type of operator:

console.log('data type is :'+ (typeof name));


// Number:

let marks = 13;

console.log('data type is :'+ (typeof marks) )

// Boolean

let Driving = false;
console.log('data type is :'+ (typeof Driving))


// Null 
let Nullvar = null;
console.log('data type is :'+ (typeof Nullvar))


// undefined
let undef = undefined;
console.log('data type is :'+ (typeof undef))


// 2.References data type:


//Arrays:

myarr = [1,2,3,4,5, false, true]
console.log('data type is :' + (typeof myarr))

//object literals:

let studentmarks = {
    rahul :34,
    shankar:35,
    rohan:64,

} 
console.log(studentmarks)

//function :

 findname= ()=> {
    
}

console.log(typeof findname);


//Date is  object:

let date = new Date();

console.log(typeof date)

