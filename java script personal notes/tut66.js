//linking html  file to local host;

const http = require('http')
const fs = require('fs')
const file = fs.readFileSync('index2.html')

//creating a local server;

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(file)
})

server.listen(80, "127.0.0.1",()=>
console.log('listening on port 80'))
