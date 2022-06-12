const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Servir los archivos estáticos dentro del 'public'
app.use(express.static(path.join(__dirname, '../public')));

// A las requests no identificadas con ninguna ruta de express, se les envía index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto: ${port}`)
})
