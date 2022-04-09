const express = require('express');
const app = express();
const port = 8080;

//
app.set('view engine', 'hbs');

// Middleware para servir contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta');
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/generic', (req, res) => {
  res.sendFile(`${__dirname}/public/generic.html`);
});

app.get('/elements', (req, res) => {
  res.sendFile(`${__dirname}/public/elements.html`);
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/back/public/404.html`);
});

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto', port);
});
