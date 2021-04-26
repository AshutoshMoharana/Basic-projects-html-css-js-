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