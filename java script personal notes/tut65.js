//this tutorial is for blocking and nonblocking

//synchronous or blocking : line by line execution

//Asynchronous or non-blocking 👍 line by line execution not guaranted and callbacks will fire

const fs = require('fs');
const text = fs.readFile('writingfile.txt', 'utf-8', (err, data)=>{
    console.log( data);
});


console.log('this is a message');