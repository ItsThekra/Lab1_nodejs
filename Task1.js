// To create the server
const http = require('http'); 
// To serve the image in node.js: ( file system, readFile)
const fs = require('fs');

const server = http.createServer((req, res) => {

    fs.readFile('image.jpg', (err, data) => {
      if (err) {
        res.end('Error loading image');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    });

});

// give port to the server 
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});