const http = require('http');

const server = (localTime) => {
    const PORT = `3000`;
    http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(`The current date and time is: ${localTime}`);
      res.end();
    }).listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  };
  
  module.exports = {server}