//express
const express = require('express');
//partials
const hbs = require('hbs');

//express
const app = express();
//dotenv
require('dotenv').config();
//definimos el puerto
const port = process.env.PORT;


//handlebars
app.set('view engine', 'hbs');
// partials
hbs.registerPartials(__dirname + '/views/partials');


//mostrar un archivo publico
//uso de middlware
//nos lleva directamente al index.html
app.use(express.static('public'));

//home.html
app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/public/client.html');
    res.render('index');
});
//client.html
app.get('/client', function (req, res) {
    // res.sendFile(__dirname + '/public/client.html');
    res.render('client');
});
//constacto
app.get('/contact', function (req, res) {
    // res.sendFile(__dirname + '/public/contact.html');
    res.render('contact');
});
//health
app.get('/health', function (req, res) {
    // res.sendFile(__dirname + '/public/health.html');
    res.render('health');
});
//medicine
app.get('/medicine', function (req, res) {
    // res.sendFile(__dirname + '/public/medicine.html');
    res.render('medicine');
});
//news
app.get('/news', function (req, res) {
    // res.sendFile(__dirname + '/public/news.html');
    res.render('news');
});
//pagina de error
app.get('*', function (req, res) {
    // res.sendFile(__dirname + '/public/404.html');
    res.render('404');
});

//listener del puerto
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})