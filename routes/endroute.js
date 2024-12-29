const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
  res.send(`
    <h1>Bienvenido a /endroute</h1>
    <p>Has accedido correctamente a esta ruta.</p>
    <a href="/">Volver a inicio</a>
  `);
});

module.exports = router;
