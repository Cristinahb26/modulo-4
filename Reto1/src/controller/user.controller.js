const mostrar = (req, res) => {

    console.log('Peticion recibida del cliente');

    console.log(`URL: ${req.url}`);
    console.log(`Método: ${req.method}`);
    console.log(`User-Agent: ${req.headers['user-agent']}`);

}
/* Ruta principal */
app.get('/', (req, res) => {
    res.status(200).json({ ok: true, message: 'Recibido!' });
  });
  
/* Ruta "/bye" */
  app.get('/bye', (req, res) => {
    res.status(200).json({ ok: true, message: 'Adios!' });
  });