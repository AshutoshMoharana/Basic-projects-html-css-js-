// console.log('Hello world printing "hello world using ctrl+` and node file name');

// 1.values and variables  in javascript :-----------

// var myName = "Ashtosh Moharana";
// var myAge = 26;
// console.log(myName);
// console.log(myAge);
// var _myName = "video";
// var _1my__name = 'vidwdlkjfdj';
// var 1myName = 'heroAlom'; "this is invalid token due to starting number"
// var $myName = 'thapatechnical';
// console.log($myName);

// 2.Data types in javascript :----------------------

// 1.checking string type ;
// var myName = 'Ashutosh Moharana';
// console.log(myName);

// 2.boolean operator
// var imashutosh = true;
// var imashutosh = false;
// console.log(typeof(imashutosh));
// console.log(typeof(imashutosh));

// 3.checking undefined datatype:
// console.log(typeof(heroallom));

// console.log(10+'20');
// console.log(9-"5");
// console.log('java'+'script');
// console.log(" "+" ");
// console.log("  "+ 0);
// console.log('vinod'-'thapa');
// console.log(true+true);
// console.log(false+true);
// console.log(false+true);
// console.log(false-true);

// difference between null vs undefined?
// Ans:.null means no value (blank object) and undefined means variable with no assign value(and its typeof is undefined).ex:

// var heroallom = null;
// var imstandby;
// console.log(imstandby);
// console.log(typeof(null));

// 2.(qn) what is NaN?
// Ans:NaN is a  property of the global object.
// in other words , it is a variable in global scope .
// The initial value of NaN is Not-A-Number.
// example:
// var myphonenumber = 8247374;
// var myname = "Ashutosh";

// console.log(isNaN(myphonenumber));
// console.log(isNaN(myname));

// if(isNaN(myname)){
//     console.log(('please enter a valid phone number'));
// }
// console.log(NaN === NaN);
// console.log(Number.NaN === Nan);
// console.log(isNan(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// 3.Expressions and operators:_________________________
// operators :
// .Assignment operators
// ex :
// var x = 5;
// var y = 6;
// console.log('is both the x and y are equal or not'+ x === y);

// .Arithmetic operators.  ex:

// console.log(3+3);
// console.log(10 - 5);
// console.log(20/5);
// console.log(5*6);

// Increment and decrement operators ex:
//   operator: x++ or ++x or x-- or --x
// below example is for postfix opearators
// var num = 15;
// var newnum = num++;
// console.log(num);
// console.log(newnum);

// below example is for prefix operators
// var num = 15;
// var newnum = ++num;
// console.log(num);
// console.log(newnum);

// .comparison operators----------------------------
// var a = 30;
// var b = 10;
// console.log(a == b);
// console.log(a != b);
// console.log(a >= b);
// console.log(a <= b);
// .logical operators
// and operators (&&):here if any logic is false then its showing false;

// var a = 30;
// var b = -20;
// console.log(a > b && b > 0);
// or operator (||)____ if any logic in this is true then its true and all are false then its showing false
// console.log(a > b && b > 0 || a > b || b > 0);

//logical not operator(!)ex;
// console.log(!((a>0)|| (b>0)));
// console.log(!(false));

// .string operators-------------------------------
// for ex:
// var newname = 'ahsdfjdfj';
// console.log(newname + ' ashutosh');

// .conditional (ternary) operators---------
// syntax for conditional operator:
// if condition is true ,expression is executed
// if condition is false , expression is executed
// ex:
// int a, b, c;
// c = a>b?a:b//if a>b'execute'a,else b and assign the value to c
// some questions:--------------------------------------
// .what will be the output of 3**3?
// console.log(3**3); out put 27
// .what will be the output , when we add a number and a string?
// console.log('ashutosh'+ 3); output: ashutosh3

// .write a program to swap two numbers?

// var a = 5;
// var b = 10;
// var c = b;
// b = a;
// a = c;
// console.log('the value of a is :'  + a);
// console.log('the value of b is :'  + b);

// // .write a program to swap two numbers without using third variable?
// var a = 5;
// var b = 10;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a, b);

// what is the difference between == and === ?
// var num1 = 5;
// var num2 = '5';
// console.log( num1 == num2); checking value .
// console.log( num1 === num2); checking value with type .
// 4.control statement and loops: ---------------
// .if else ex:
// var tomorrow = 'raining';
// if(tomorrow == "raining" ){
//     console.log('tomorrow is rainy day');
// }else{
//     console.log('tomorrow is hard day');
// }
// question - - accroding to if else condition:
//Qn.1. wrtie a program that works out whether if a given year is leap year or not?

// var year = 2020;
// debugger;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log('this year '+ year + 'is a leap year');
//         }else{
//             console.log('this year'+year+'is not a leap year');
//         }
//     }else{
//         console.log('this year' + year + 'is a leap year');
//     }
// }else {
//     console.log('the year'+ year + 'is not a leap year');
// }
// question. what is truthty and falsy values in javascript?
// Ans: we have 5 falsy values in js,0 , " ", undefined, NaN, false** is false anyway
// if (score = 0) {
//     console.log('omg, we loss the game 🥈');
// }else{
//     console.log('yay , we won the game 🥇');
// }

// the if statement executes

// .switch statement :
// its evaluates Expression, matching the expression's value to a case clause executes  statements associated with that case

// var area = 'square';
// var area = quebe;
// var pi = 2.1234, l = 4, b= 4, r= 3;

// switch (area) {
//     case 'circle':
//         console.log('the area of circle is :' + pi*r**2);
//         break;
//     case 'triangle':
//          console.log('the area of triangle is :' + (l*b)/2);
//          break;
//     case 'square':
//         console.log('this is the value of  square: square');
//         break;
//     default:
//  console.log('this is a quebe ');
//         break;
// }

// .while loop :
// the while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.
//ex;

// var number = 10;
//  while(number <= 10){
//      console.log(number);
//      number++;

// .do-while loop ;
// var num = 0;
// do {
//     console.log(num);
//     num++;

// } while (num <=10);

// . for loop -------
// syntax :

// for(initializer; condition ; iteration)
{
  //code to be executed
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// for(var num = 0 ; num <=10; num++){
//     debugger;
//     console.log(num);

// }
// qn . javascript program to print table for given number *(8,9,12,15)using for loop?

// for(num = 0; num < 11 ; num++ ){
//     console.log(num*9);
// }
// . for in loop

// .for of loop

// .conditional (ternary) operator
// The conditional operator is the only javascript operator that takes three operands .and also its upgrade version of if ,else

//var age         (age>18)  if true   if false

// syntax : variablename = (condition)? value 1: value2;

// var age = 17;
// console.log((age>=18)? 'you can vote': "you can't vote");

//FUNCTIONS IN JAVASCRIPT;

// A javascript function is a block of code designed to perform a particular task.

// // syntax:
//  function functionName(parameters) {
//     //statement   ;
// }
//function(arguments);

// how to write a function of two digits addition:
// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function addition(a, b) {
//     var a = 10;
//     var b = 20;
//     z = a + b;

//     console.log(z);
// }
// addition();
// QN. what is the difference between function parameter and function arguments:

// function sum(a, b) {
//     var total = a+b;
//     console.log(total);

// }
// sum();
// sum(20, 30);
// sum(40, 50);

// function expression : function expression means create a function and put it in variable
// for example:
// var funexpression = function sum(a, b){
//     var total = a+b;
//     console.log(total);
// }
// function sum(a, b) {
//   return (total = a + b);
// }
// Anonymous function expression ex:
// var functionexpression = function(a, b){
//     return total = a+b;
// }
// var sum = functionexpression(15,15);
// var sum1 = functionexpression(150,1556);
// console.log('the sum of two number is :'+ sum);

// EXMA SCRIPT STARTS HERE
// let ,const ,var :

// var = function scope
// let and const = block scope

// Templetes literals (Templetes strings)

// const name = 'heroallom';

// console.log(`${name}`);
// Default parametera:
// function multi(a, b= 5){
//     return a*b;
// }
// console.log(multi(3));

// Fat arrow function ex; first define then call
// const sum=()=>{
//     let a = 5; b = 6;
//     let sum = a+b;
//     return ` the sum of the number is ${sum}`
// }
// console.log(sum());

// or we can write also:

// const sum = () =>`the sum of the two number is ${a+b}`
// console.log(5, 7);

// 6.Array in JAVASCRIPT;
// var names = ['vinod', 'bahadur', 'lol'];
// Traversal in Array ;
// console.log(names[1]);

//checking length  of array;
// console.log(arrayname.length);

// for in loop and for of loop :

// var myFriends = ["vinod", "ramesh", "arjun", "vishal"];
// debugger;
//  for loop:
// for(var i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
// for in loop :in this loop we can get index of elements;
// ex ;

// for(let elements in myFriends){
//   console.log(elements);
// }
// for off loop (it returns the elements of array)
// for(let elements of myFriends){
//   console.log(elements);
// }
// for each loop: its  calls a function for each elements in the array.

// myFriends.forEach(function(element, index, array){
//   console.log(element +"index of : "+index + array);

// 2.Array subsection : searching and filter in an array 

// 3.Array.prototype.push()
// the push() method adds one or more elements to the end of an array and returns the new length of the array 

// const animals = ['pigs',"goats","sheep"]

// animals.push('chicken');
// console.log(animals);

// Array unshift() : if we want to add element at the starting of the array then we use unshift.

// animals.unshift('heroallom');

// console.log(animals);

// Array pop() its returns the element which we want and it changes the array length.

// const plants = ['brocoli', "cauliflower", "kale", "tomato", 'cabbage'];

// plants.pop(-1); //console.log*(plants.pop());
// console.log(plants);

// we can remove the first element from the array by using shift
// plants.shift(0);
// console.log(plants);


// qn 1.. Add dec at the end of an array? using only one method
// .2/ what is the return value of splice method? Ans:[]
//3.update march to March (update)?
//4,delete june from an array?
// const months = ['jan','march','april','june','july'];

// Ans 1 :
// // const newMonth = months.splice(5, 0, 'Dec') ; or we can write:
// const newMonth = months.splice(months.length, 0, 'Dec');
// console.log(months);
// console.log(newMonth);
// Ans3: 
// const updatemonth = months.splice(1,1, "March");
// console.log(months);

// using indexof() method or its called searching method

// const indexofMonth = months.indexOf('march')

// if(indexofMonth != -1 ){
//   const updatemonth = months.splice(indexofMonth,1, "march");
//   console.log(months);

// }else{
//   console.log('no such data found');
// }

// 5.Array subsection: Map and Reduce Method 
// map methods returns a new array containing the results of calling a function on every element in this array.


// const array1 = [1,4,9,16,25];

// let newArr = array1.map((curElem, index,arr)=>{
//   return curElem > 9;
// })
// console.log(newArr);
// let newArr = array1.map((currelem, index, array )=>{
//   return `index no =${index} and the value is ${currelem} belongs to ${array} `
// })

// console.log(newArr);
// instead of map we use for each

// let newArr = array1.forEach((currelem, index, array )=>{
//   return `index no =${index} and the value is ${currelem} belongs to ${array} `
// })

// console.log(newArr);





























































































