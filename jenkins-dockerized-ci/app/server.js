const http = require('http');
const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.end('Hello from Dockerized CI/CD via Jenkins!');
});
server.listen(port, () => console.log(`Server running on ${port}`));
