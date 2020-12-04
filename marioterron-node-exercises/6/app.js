const fs = require("fs");
// const concat = require("concat-stream");
// const write = concat(function(data) {});

const processText = () => {
  fs.readFile(`text.txt`, `utf8`, (err, data) => {
      if(err) {
          console.log(err);
      }
      let concatArray = [];
      let dataStream = data.split(' ');
      dataStream.forEach(word => concatArray.push(word));
      console.log(concatArray);
  });
};

processText();
