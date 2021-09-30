# php

## English Documentation - Created by Edwin Agudelo with love :)__
## my e-mail: 3dw1n.4gud3l0@gmail.com__
«php» is a module created in order to render files in PHP format, in order to be able to use a single service to serve both files Node.js, like php. I designed this module for the purpose of learning, it is not very professional and not recommended for use on large projects.

It can be useful for development teams in which there are programmers
experienced in php working with programmers with experience in Node.js,
allowing each one to develop with their preferred language.

# NOTES
1. ONLY works on linux distributions.__
2. Need php installed natively on the system.__

# Usage:__
#########################################################__
1. Call the dependencies:__
### ------------------------------------------------- ###__
const__
  path = require('path'),__
  express = require('express'),__
  PHP = require('php');__
#########################################################__
2. Instantiate:__
### ------------------------------------------------- ###__
const__
  app = express(),__
  php = new PHP();__
#########################################################__
3. Indicate the folder of our views:__
### ------------------------------------------------- ###__
php.views = path.join(__dirname, 'views');__
#########################################################__
4. Define our routes:__
### ------------------------------------------------- ###__
app.get('/', (req, res) => {__
  php.render(`index`, function (ans) {__
    res.write(ans);__
    res.end();__
  });__
});__
app.all('/*', (req, res) => {__
  testRender(req, res);__
});__
app.get('/test', (req, res) => {__
  testRender(req, res);__
});__
function testRender(req, res){__
  php.render(req.url==='/test'?`test`:`error`, function (ans) {__
    try {__
      res.write(ans);__
      res.end();__
    } catch (err) {__
      if (err.code === 'ERR_INVALID_ARG_TYPE') {__
        let__
          errorText = [__
            'File not found.',__
            'Verify the file route.'__
          ],__
          error = `<h1>${errorText[0]}<br>${errorText[1]}<h1>`;__
        console.log(`${errorText[0]}\n${errorText[1]}`);__
        res.write(error);__
        res.end();__
      };__
    };__
  });__
};__
#########################################################__
5. Start the server:__
### ------------------------------------------------- ###__
app.listen(9811, () =>__
  console.log('\x1b[1;4;3;36mCreated by Edwin Agudelo -> 3dw1n.4gud3l0@gmail.com\x1b[0m\nServer active on port', 9811)__
);__
#########################################################__
#########################################################__
## Documentacion en español - Creado por Edwin Agudelo con amor :)__
## mi correo: 3dw1n.4gud3l0@gmail.com__
«php» es un modulo creado con la finalidad de renderizar archivos en formato PHP, con la finalidad de poder utilizar un unico servicio para servir tanto archivos Node.js, como php. Este modulo lo diseñe con el proposito de aprender, no es muy profesional y no se recomienda utilizarlo en grandes proyectos.

Puede ser de utilidad para equipos de desarrollo en los cuales hay programadores con experiencia en php trabajando con programadores con experiencia en Node.js, permitiendole a cada uno desarrollar con su lenguaje de preferencia.

# NOTAS
1. SOLO funciona en distribuciones linux.__
2. Debe tener instalado php de manera nativa en el sistema.__


# Modo de uso:__
#########################################################__
1. Llamamos las dependencias:__
### ------------------------------------------------- ###__
const__
  path = require('path'),__
  express = require('express'),__
  PHP = require('php');__
#########################################################__
2. Instanciamos:__
### ------------------------------------------------- ###__
const__
  app = express(),__
  php = new PHP();__
#########################################################__
3. Indicamos la carpeta de nuestras vistas:__
### ------------------------------------------------- ###__
php.views = path.join(__dirname, 'views');__
#########################################################__
4. Definimos nuestras rutas:__
### ------------------------------------------------- ###__
app.get('/', (req, res) => {__
  php.render(`index`, function (ans) {__
    res.write(ans);__
    res.end();__
  });__
});__
app.all('/*', (req, res) => {__
  testRender(req, res);__
});__
app.get('/test', (req, res) => {__
  testRender(req, res);__
});__
function testRender(req, res){__
  php.render(req.url==='/test'?`test`:`error`, function (ans) {__
    try {__
      res.write(ans);__
      res.end();__
    } catch (err) {__
      if (err.code === 'ERR_INVALID_ARG_TYPE') {__
        let__
          errorText = [__
            'Archivo no Encontrado.',__
            'Verifique la ruta de los archivos.'__
          ],__
          error = `<h1>${errorText[0]}<br>${errorText[1]}<h1>`;__
        console.log(`${errorText[0]}\n${errorText[1]}`);__
        res.write(error);__
        res.end();__
      };__
    };__
  });__
};__
#########################################################__
5. Iniciamos el servidor:__
### ------------------------------------------------- ###__
app.listen(9811, () =>__
  console.log('\x1b[1;4;3;36mCreado por Edwin Agudelo -> 3dw1n.4gud3l0@gmail.com\x1b[0m\nServidor activo en el puerto', 9811)__
);__