const http = require('http');
const url = require('url');
const { calculateCoinage } = require('./p3-module');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const amount = query.amount;

  if (!amount) {
    res.statusCode = 400;
    res.end('Please provide an amount parameter');
  } else {
    const cents = parseInt(amount);
    if (isNaN(cents)) {
      res.statusCode = 400;
      res.end('Invalid amount parameter');
    } else {
      const coinage = calculateCoinage(cents);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(coinage));
    }
  }
});

server.listen(3000, () => {
  console.log('Coinage server started on port 3000');
});