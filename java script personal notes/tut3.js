console.log('hello world');

// variables in java script:

// var , let , const 


// 1.using old declaration var (we can change the variables and values of variables):



var name = 'ashutosh';
console.log(name);

// or usign ` `
var name2 = 'new veriable';
var name = 'heroalom';
// here we can create variables and objects together;
console.log(name,{name2}); 

// Rules for creating javascripts variables: :

 /*

1.java script variables are can't start with numbers;
2.java script variables are can start with letter , numbers , $;
3.java script variables are  case sensitive;

*/


//below ex defines like objects 
var $city = 'odisha';
console.log({$city});


// below ex we can defines variables also like this:
console.log($city);


// 2.using const(we can't change the variable's value because its constant ):

const ownersname = 'hare krishna';
console.log(ownersname)

// 3.using let variable declaration::



// printing variables with in blockquote

{
    let city = 'Rourkela';
    console.log(city);
}

// printing variables without blackqoute;

let jai = 'puri';

{
    let jaganath = 'puri mandir';
    console.log(jaganath);
}
console.log(jai);


// we can push numbers inside the array like below  or using ... operator we will learn later. 

const arr1 = [23,44,5,65677,88];

arr1.push(45);

console.log(arr1);


/* most common case letters in programming: bonus tips

1.   camelCase 
2.   kebab-case
3.   snake_case
4.   PasscaleCase

*/



















