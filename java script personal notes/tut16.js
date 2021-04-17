console.log('hello this is tut16 and chapter: Creating Removing and Replacing Elements');



//lets create attributes, class, and id in element , so first create an element:

// let element = document.createElement('li');
//its create an object;
// console.log(typeof element);
//lets create class with in the element :
// element.className = 'childul';
//lels crates id with in the element:

// element.id = 'createdLi';

//lets create an attributes(properties );
// element.setAttribute ('title', 'mytitle');

//how to append element in dom :   
//first we have to target element which we want to display using query selector:
// let ul = document.querySelector('ul.this');
//lets append element
// ul.appendChild(element);

//lets input text :

// element.innerText = ("Hello this is created by Ashutosh"); 
// console.log(element);

//or we can use innerhtml:
// element.innerText = ("Hello this is created by Ashutosh"); 

// or we can use to display element in different way:

// let text = document.createTextNode('this is a text node');
// element.appendChild(text);


//Replacing element:

// first create new element:
// let elem3 = document.createElement('h3');
// elem3.id = 'elem2';
// elem3.className = 'elem2';
// let tnode = document.createTextNode('this is create by text node')
// elem3.appendChild(tnode);

// element.replaceWith(elem3);


//let replace element using class name:

// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));


//for remove child:
// myul.removeChild(document.getElementById('lui'));

//checking attributes:
// let pr = elem2.hasAttribite('random');


// elem2.removeAttribute('random');
