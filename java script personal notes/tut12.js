console.log('hello this is step11 : Understanding DOM & Creating a website layout- js step by step for begineers ')

//for all elements in document we type document.all for ex;
let a = document;
a = document.all
;
//for what elements in body:
// a = document.body;

//for forms in document:
// a = document.forms;
console.log(a);

Array.from(a).forEach(function(element){
    // console.log(element);
})

//Array.from(a) is create a array and store it in "a" for  function run