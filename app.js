const express = require('express');
const bodyParser = require('body-parser');
const genericRouter = require('./routes/genericRouter');

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

app.use('/generic', genericRouter);

app.get('/', (req, res) => {
  console.log("Request Recieved on root /")
  res.send(`
    <h1>Hello World!</h1>
  `);
});

app.listen(PORT, HOST);
console.log(`Server running at http://${HOST}:${PORT}/`);