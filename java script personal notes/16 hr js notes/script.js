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





