const express = require('express')
const app = express();

const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('../swagger.json');


app.get('/soma/:a&:b', (req, res) => {
  const {a, b}  = req.params;
  const result = parseInt(a)+parseInt(b);
  
  return res.status(200).json(result)
  
})

app.use('/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(8001, () => {
  console.log("server listening on http://localhost:8001 🎉");
})