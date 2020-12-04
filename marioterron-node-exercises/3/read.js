const fs = require("fs");

const read = () => {
  fs.readFile("link.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

module.exports = read;
