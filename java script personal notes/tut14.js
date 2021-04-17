// console.log('welcome to tutorial 14');


// Element selectors;

// 1.single element selectors;
// 2.multi element selectors;

// 1.single element selectors;
let element = document.getElementById('heading')
//we can select by classname also
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
//we can change elements color directly by js;for example:
// element.style.color = 'red';
/*for changing innertext or inner html */
// element.innerText = 'Ashutosh is a good boy'
// element.innerHTML = 'here we go'
// for grabbing innertext or innerhtml
// console.log(element.innerHTML)
// console.log(element.innerText)

// console.log(element);


// lets use querySelector  
// let sel = document.querySelector('#heading');
// let sel2 = document.querySelector('.child');
// sel.style.color = 'green'
// console.log(sel)
// console.log(sel2)

//multi element selectors

let a = document.getElementsByClassName('child')


// console.log(elements)
// console.log(elements.length)
// console.log(elements[0])
//grabing all tag i.e html:
let elements3 = document.getElementsByTagName('div')
// console.log(elements3 )


// Array.from(elements).forEach(elements => {
//     console.log(elements);
//     elements.style.color = 'red'
    
// });

for (let index = 0; index < Array.length; index++) {
    const element = a[index];
    console.log(element);
    
}












