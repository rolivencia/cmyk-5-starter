const express = require('express');
const app = express();
const path = require('path');

// Asigna el puerto correspondiente según se haya asignado o no uno.
const port = process.env.PORT ? process.env.PORT : 3000;

// Servir los archivos estáticos dentro del 'public'
app.use(express.static(path.join(__dirname, '../public')));

// A las requests no identificadas con ninguna ruta de express, se les envía index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto: ${port}`)
})
