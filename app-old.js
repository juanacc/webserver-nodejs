const http = require('http');

http
  .createServer((req, res) => {
    // res.setHeader('Content-disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hola mundo');
    res.end(); // se le indica a node que ya termine de enviar la respuesta
  })
  .listen(8080);

console.log('Servidor corriendo en el puerto', 8080);
