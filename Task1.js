// To create the server
const http = require('http'); 
// To serve the image in node.js: ( file system, readFile)
const fs = require('fs');

const html = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>node.js</title>
</head>
<body>
    <h1>Hello Thekra</h1>
</body>
</html>`;

const server = http.createServer((req, res) => {

    fs.readFile('image.jpg', (err, data) => {
      if (err) {
        res.end('Error loading image');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    //   res.end(html)
    });

});

// give port to the server 
server.listen(3000, '127.0.0.1' , () => {
  console.log('Server listening on port 127.0.0.1:3000');
});