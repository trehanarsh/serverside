const express = require('express'),
     http = require('http');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3006;

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());


const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`yes,Server running at http://${hostname}:${port}/`);
});