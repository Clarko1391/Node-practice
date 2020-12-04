// const moment = require('moment');

let timeStamp = () => {
let currentTimeStamp = new Date();
currentTimeStamp = currentTimeStamp.toLocaleString();
console.log(`Today is: ${currentTimeStamp}`);
}

module.exports = { timeStamp }