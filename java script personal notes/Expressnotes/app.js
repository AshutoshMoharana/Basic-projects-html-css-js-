const express = require('express')
const app = express();
const port = 80;

app.use('/static', express.static('static'))

app.get('/', (req, res)=>{
    res.status(400).send('this is my first express app with hello')

});
app.get('/about', (req, res)=>{
    res.send('this is my first express app with hello')

});
app.post('/about', (req, res)=>{
    res.send('this is my first post request about express app with hello')

});
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});


