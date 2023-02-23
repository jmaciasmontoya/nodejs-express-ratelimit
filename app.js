const express = require("express");
const rateLimit = require("express-rate-limit");const app = express();

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 6, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });
  
app.get("/users", accountLimiter, (req, res) => {
  res.send('hola mundo ...')
});

app.post('/create-account', accountLimiter, (req, res) => {   // your logic
   res.send('Cuenta creada');
});

app.listen(3000, () => console.log(`App ejecutando en puerto :3000`));
