const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
