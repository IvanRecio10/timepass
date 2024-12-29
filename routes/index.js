const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
  const mensaje = req.query.mensaje || '';
  const hora = req.hora;

  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${hora}:00</p>
    <p style="color: red;">${mensaje}</p>
    <form action="/endroute" method="get">
      <button type="submit">Ir a /endroute</button>
    </form>
  `);
});

module.exports = router;
