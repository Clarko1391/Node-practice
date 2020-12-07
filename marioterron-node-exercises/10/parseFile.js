const fs = require('fs');
const { addition } = require('./addition');

const parseFile = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        let stringArray = [];
        let intArray = [];
        if (err) {
            console.log(err);
        }
        stringArray = data.split('\r\n');
        stringArray.forEach(value => {
            value = parseInt(value);
            if(!isNaN(value)) {
                intArray.push(value);
            }
        });
        // console.log(intArray);
        addition(intArray);
    })
}
module.exports = {parseFile};