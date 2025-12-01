const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta inicial que muestra una cadena de texto
app.get('/', (req, res) => {
  res.send('Hola — estos cambios son de la rama secundaria');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
