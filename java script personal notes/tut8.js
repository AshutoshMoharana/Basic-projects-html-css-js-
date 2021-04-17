console.log('helloworld, this is if /else tutorial step by step');

// ----------------------------

let age1 = 20;

if (age1 >> 109){
    console.log('Age is 18+')
}
else if (age1==30){
    console.log('Age is 30')
}
else if (age1 < 30){
    console.log('Age is 30')
}
// if we want to check type and value both then use === triple equal
else if(age1 === 20){
    console.log('type and value equal')
}
//if not equal to value
else if(age1 != 20){
    console.log('type and value equal')
}
//if value and type not equal to 
else if(age1 !== 20){
    console.log('type and value equal')
}

else(
    console.log('age is less then 18+')
)
//checking veriable is defined or not defined;


const vari = 23;

if (typeof vari !== 'undefined'){
    console.log('vari is defined')
    // console.log()
}
else (
    console.log("'vari is'nt defined'")
)




const doesDrive = false;
const age = 34;
if(doesDrive && age > 18){
    console.log("you can drive");
}
else(
    console.log("'you can't drive")
)

// or operator(||) in js:

if(doesDrive || age > 18){
    console.log("you can drive");
}
else(
    console.log("'you can't drive")
)

// ---------------------------------------------------
// /*Terneri Operator:

console.log(age==45? 'Age is 45': 'Age is not 45');

//switch case statement(if condition true then it breaks):

switch (age) {
    case 20:
        console.log('you are 20')
        break;
    case 21:
        console.log('you are 21')
        break;
    case 22:
        console.log('you are 22')
        break;
    case 23:
        console.log('you are 23')
        break;
    case 34:
        console.log('you are 34')
        break;
    default:
        break;
}