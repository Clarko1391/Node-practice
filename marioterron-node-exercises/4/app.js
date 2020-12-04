const fs = require('fs');

const readDir = () => {
    let result = fs.readdirSync('../4', 'utf8');
    result.forEach(entry => {
        if (fs.lstatSync(`${entry}`).isDirectory()) {
            console.log(`${entry} is a directory`)
        } else {
            console.log(`${entry} is a file`)}
    });
}

readDir();


