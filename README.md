# php

## English Documentation <br/>Created by Edwin Agudelo<br />
## my e-mail: 3dw1n.4gud3l0@gmail.com<br />
«php» is a module created in order to render files in PHP format, in order to be able to use a single service to serve both files Node.js, like php. I designed this module for the purpose of learning, it is not very professional and not recommended for use on large projects.

It can be useful for development teams in which there are programmers
experienced in php working with programmers with experience in Node.js,
allowing each one to develop with their preferred language.

# NOTES
1. ONLY works on linux distributions.<br />
2. Need php installed natively on the system.<br />

# Usage:<br />
#########################################################<br />
1. Call the dependencies:<br />
### ------------------------------------------------- ###<br />
const<br />
&nbsp;&nbsp;path = require('path'),<br />
&nbsp;&nbsp;express = require('express'),<br />
&nbsp;&nbsp;PHP = require('php');<br />
#########################################################<br />
2. Instantiate:<br />
### ------------------------------------------------- ###<br />
const<br />
&nbsp;&nbsp;app = express(),<br />
&nbsp;&nbsp;php = new PHP();<br />
#########################################################<br />
3. Indicate the folder of our views:<br />
### ------------------------------------------------- ###<br />
php.views = path.join(__dirname, 'views');<br />
#########################################################<br />
4. Define our routes:<br />
### ------------------------------------------------- ###<br />
app.get('/', (req, res) => {<br />
&nbsp;&nbsp;php.render(`index`, function (ans) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;res.write(ans);<br />
&nbsp;&nbsp;&nbsp;&nbsp;res.end();<br />
&nbsp;&nbsp;});<br />
});<br />
app.all('/*', (req, res) => {<br />
&nbsp;&nbsp;testRender(req, res);<br />
});<br />
app.get('/test', (req, res) => {<br />
&nbsp;&nbsp;testRender(req, res);<br />
});<br />
function testRender(req, res){<br />
&nbsp;&nbsp;php.render(req.url==='/test'?`test`:`error`, function (ans) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;try {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.write(ans);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.end();<br />
&nbsp;&nbsp;&nbsp;&nbsp;} catch (err) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (err.code === 'ERR_INVALID_ARG_TYPE') {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errorText = [<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'File not found.',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Verify the file route.'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error = `<h1>${errorText[0]}<br>${errorText[1]}<h1>`;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`${errorText[0]}\n${errorText[1]}`);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.write(error);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.end();<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br />
&nbsp;&nbsp;&nbsp;&nbsp;};<br />
&nbsp;&nbsp;});<br />
};<br />
#########################################################<br />
5. Start the server:<br />
### ------------------------------------------------- ###<br />
app.listen(9811, () =><br />
&nbsp;&nbsp;console.log('\x1b[1;4;3;36mCreated by Edwin Agudelo -> 3dw1n.4gud3l0@gmail.com\x1b[0m\nServer active on port', 9811)<br />
);<br />
#########################################################<br />
#########################################################<br />
## Documentacion en español <br/>Creado por Edwin Agudelo con amor :)<br />
## mi correo: 3dw1n.4gud3l0@gmail.com<br />
«php» es un modulo creado con la finalidad de renderizar archivos en formato PHP, con la finalidad de poder utilizar un unico servicio para servir tanto archivos Node.js, como php. Este modulo lo diseñe con el proposito de aprender, no es muy profesional y no se recomienda utilizarlo en grandes proyectos.

Puede ser de utilidad para equipos de desarrollo en los cuales hay programadores con experiencia en php trabajando con programadores con experiencia en Node.js, permitiendole a cada uno desarrollar con su lenguaje de preferencia.

# NOTAS
1. SOLO funciona en distribuciones linux.<br />
2. Debe tener instalado php de manera nativa en el sistema.<br />


# Modo de uso:<br />
#########################################################<br />
1. Llamamos las dependencias:<br />
### ------------------------------------------------- ###<br />
const<br />
&nbsp;&nbsp;path = require('path'),<br />
&nbsp;&nbsp;express = require('express'),<br />
&nbsp;&nbsp;PHP = require('php');<br />
#########################################################<br />
2. Instanciamos:<br />
### ------------------------------------------------- ###<br />
const<br />
&nbsp;&nbsp;app = express(),<br />
&nbsp;&nbsp;php = new PHP();<br />
#########################################################<br />
3. Indicamos la carpeta de nuestras vistas:<br />
### ------------------------------------------------- ###<br />
php.views = path.join(__dirname, 'views');<br />
#########################################################<br />
4. Definimos nuestras rutas:<br />
### ------------------------------------------------- ###<br />
app.get('/', (req, res) => {<br />
&nbsp;&nbsp;php.render(`index`, function (ans) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;res.write(ans);<br />
&nbsp;&nbsp;&nbsp;&nbsp;res.end();<br />
&nbsp;&nbsp;});<br />
});<br />
app.all('/*', (req, res) => {<br />
&nbsp;&nbsp;testRender(req, res);<br />
});<br />
app.get('/test', (req, res) => {<br />
&nbsp;&nbsp;testRender(req, res);<br />
});<br />
function testRender(req, res){<br />
&nbsp;&nbsp;php.render(req.url==='/test'?`test`:`error`, function (ans) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;try {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.write(ans);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.end();<br />
&nbsp;&nbsp;&nbsp;&nbsp;} catch (err) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (err.code === 'ERR_INVALID_ARG_TYPE') {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errorText = [<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Archivo no Encontrado.',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Verifique la ruta de los archivos.'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error = `<h1>${errorText[0]}<br>${errorText[1]}<h1>`;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`${errorText[0]}\n${errorText[1]}`);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.write(error);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.end();<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br />
&nbsp;&nbsp;&nbsp;&nbsp;};<br />
&nbsp;&nbsp;});<br />
};<br />
#########################################################<br />
5. Iniciamos el servidor:<br />
### ------------------------------------------------- ###<br />
app.listen(9811, () =><br />
&nbsp;&nbsp;console.log('\x1b[1;4;3;36mCreado por Edwin Agudelo -> 3dw1n.4gud3l0@gmail.com\x1b[0m\nServidor activo en el puerto', 9811)<br />
);<br />