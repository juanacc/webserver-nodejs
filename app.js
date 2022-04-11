const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para servir contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta');
});

app.get('/', (req, res) => {
  res.render('home', {
    // renderiza el archivo home.hbs pasandole argumentos
    nombre: 'Juan',
    titulo: 'Mi pagina web'
  });
});

app.get('/generic', (req, res) => {
  //res.sendFile(`${__dirname}/public/generic.html`);
  res.render('generic', {
    nombre: 'Juan',
    titulo: 'Mi pagina web'
  });
});

app.get('/elements', (req, res) => {
  //res.sendFile(`${__dirname}/public/elements.html`);
  res.render('elements', {
    nombre: 'Juan',
    titulo: 'Mi pagina web'
  });
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/back/public/404.html`);
});

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto', port);
});
