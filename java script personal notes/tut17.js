console.log('hello this is tutorial 17 (Events and Event Object in Java Script) ');

document.getElementById('heading').addEventListener
('click', function(e){
    console.log('you have clicked the heading');
    // location.href = '//google.com' 
// here function(e) is used for showing default help of all mouse events lets print out all of these:
    //  console.log(e);
// for target a element :
    // let variable;
    // variable = e.target;
    // console.log(variable);
 //we can run in e element like 
//  1.variable 
//  2.classname
//  3.classlist
//  4.id etc

//  variable = e.target.className;
//  variable = e.target.classList;
//  variable = e.target.classList;

// if we want to put in array:
 variable  = Array.from(e.target.classList)
 console.log(variable);
 //for locating another location we can use location.href = '//sitename.com'   
 // if we want how much distance from clicking away then we use offsetx and offsety:
 variable = e.target.id;
 variable = e.offsetX;
 variable =  e.offsetY;
 variable = e.clientX;
 variable = e.clientY;
 variable =  e.offsetY;


 console.log(variable)
 

});

