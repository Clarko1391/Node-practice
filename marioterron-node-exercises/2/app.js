const fs = require('fs');


// readFile from fs takes 3 args, first is file path, second is 'options' object, third is callback function
// options --> encoding (utf8), flag, signal
// callback --> by default err and data return values related to read error or the contents of the file encoded as specified. If no encoding is specified then it returns as raw binary
const read = () => {fs.readFile('text.txt', 'utf8',  (err, data) => {
    if (err) throw err;
    console.log(data);
});
}

read();