//this tut is for writing and updating files using nodejs

const fs = require('fs');
//reading a newfile
const text = fs.readFileSync('writingfile.txt', 'utf-8');

console.log('the content of the file is');

console.log(text);



fs.writeFileSync('updating.txt', text);













