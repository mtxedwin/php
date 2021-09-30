"use strict";
const
  path = require('path'),
  express = require('express'),
  PHP = require('../index'),
  app = express(),
  php = new PHP();

php.views = path.join(__dirname, 'views');

app.get('/', (req, res) => {
  php.render(`index`, function (ans) {
    res.write(ans);
    res.end();
  });
});
app.all('/*', (req, res) => {
  testRender(req, res);
});
app.get('/test', (req, res) => {
  testRender(req, res);
});

function testRender(req, res){
  php.render(req.url==='/test'?`test`:`error`, function (ans) {
    try {
      res.write(ans);
      res.end();
    } catch (err) {
      if (err.code === 'ERR_INVALID_ARG_TYPE') {
        let
          errorText = [
            'Archivo no Encontrado.',
            'Verifique la ruta de los archivos.'
          ],
          error = `<h1>${errorText[0]}<br>${errorText[1]}<h1>`;
        console.log(`${errorText[0]}\n${errorText[1]}`);
        res.write(error);
        res.end();
      };
    };
  });
};

app.listen(9811, () => console.log('\x1b[1;4;3;36mCreado por Edwin Agudelo -> 3dw1n.4gud3l0@gmail.com\x1b[0m\nServidor activo en el puerto', 9811));
