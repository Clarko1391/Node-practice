const fs = require('fs');

const newFile = (fp = `newFile.txt`, data = `This is a default value, this file was created by Node.js`) => {
    fs.writeFile(fp, data, (err) => {
        if (err) {
            console.log(`there was an error, here is your error message: ${err}`);
        } else {
            console.log(`file created successfully`);
        }
    })
}

newFile(`anotherNewFile.txt`, `this content was passed as an argument`);