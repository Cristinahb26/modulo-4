const express = require("express");
const app = express();

const mostrar = (req, res) => {
    console.log('Petición recibida del cliente');
    console.log(`URL: ${req.url}`);
    console.log(`Método: ${req.method}`);
    console.log(`User-Agent: ${req.headers['user-agent']}`);
    res.status(200).json({ ok: true, message: 'recibido!' });
};

/* Ruta principal */
app.get('/', (req, res) => {
    res.status(200).json({ ok: true, message: 'recibido!' });
});

/* Ruta "/bye" */
app.get('/bye', mostrar);

function errorHandling(err, req, res, next) {
    res.status(500).json({ message: err.message });
}

app.use(function (req, res, next) {
    res.status(404).json({
        error: true,
        codigo: 404,
        message: "Endpoint no encontrado"
    });
});
module.exports = {
  mostrar
};

