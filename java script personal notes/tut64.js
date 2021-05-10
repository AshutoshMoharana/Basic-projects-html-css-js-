//this tut is for writing and updating files using nodejs

const fs = require('fs');
//reading a newfile
const text = fs.readFileSync('writingfile.txt', 'utf-8');

text = text.replace('update', 'this is after update');
console.log('the content of the file is');

console.log(text);

// fs.writeFileSync('updating.txt', text);

















