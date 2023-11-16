// Create web server
// Node.js example using the built-in http module
const http = require('http');

// Create a server and define a callback function to handle incoming requests
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response to the client
  res.end('Hello, World!\n');
});

// Specify the port the server will listen on and the hostname (in this case, localhost)
const port = 3000;
const hostname = 'localhost';

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
