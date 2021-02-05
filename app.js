const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/it', (req, res)=>{
    res.render('it');
});

app.get('/electrical', (req, res)=>{
    res.render('electrical');
});

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});