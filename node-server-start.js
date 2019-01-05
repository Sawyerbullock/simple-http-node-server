const fs = require('fs'),
      http = require('http'),
      port = 3000;

const requestHandler = (request, response) => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', function(err) {
    if(err) throw err;
    console.log('Saved!');
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log(`server is listening on ${port}`);
});
