// console.log("helloworld wellcome to java script tutorial");

// for example 
// let name = 'hritikroshan';
// let religion = 'Muslim';
//here we can define variable using = equal symbols not : . this colon is define type and we can use this : when creating objects or we can return useing return keyword.


// Actor = () =>{
//     console.log(`here is the indian actor name:${name}, and his religion is :${religion}`)
// }

// Actor(name = "hritikroshan", religion= "muslim"); 

// let do functions examples using objects:we can't use fat arrow function with in the objects


// const myobj = {
//     name : 'skillf',
//     game : function() {
//         return "gta";
//     }
// };
// console.log(myobj.game ());



//scops in java script---note let/const has block level scope! var has function level scope!



var i = 343;
console.log(i);

function name(params) {

    var i = 4;
    console.log(i)
    return `this is ${params} name`;
    
}
console.log(name('harekrishna'), i);
