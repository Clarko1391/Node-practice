const http = require("http");

const server = () => {
  const PORT = `3000`;
  http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`Hello Node.js!`);
    res.end();
  }).listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

server();
