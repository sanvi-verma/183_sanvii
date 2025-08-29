const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello from Dockerized CI/CD via Jenkins!');
});

server.listen(port, () => console.log(`Server running on ${port}`));
