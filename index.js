const express = require('express');
const hbs = require('hbs');


const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/Views/partials/')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : ' Daniel Balderrama',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/rivera', (req, res)=>{
    res.render('Diego' ,{
        autor : 'Daniel Balderrama',
        year : new Date().getFullYear,
        title : 'Diego Rivera'
    });
});

app.get('/khalo', (req, res)=>{
    res.render('Frida'  ,{
        autor : 'Daniel Balderrama',
        year : new Date().getFullYear,
        title : 'Frida Khalo'
    });
});

app.get('/tamayo', (req, res)=>{
    res.render('Rufino'  ,{
        autor : 'Daniel Balderrama',
        year : new Date().getFullYear,
        title : 'Rufino Tamayo'
    });
});

app.get('/alfaro', (req, res)=>{
    res.render('David'  ,{
        autor : 'Daniel Balderrama',
        year : new Date().getFullYear,
        title : 'David Alfaro'
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto tcp 3000');
});

app.get('/', (req, re)=>{
    res.render('Index');
});