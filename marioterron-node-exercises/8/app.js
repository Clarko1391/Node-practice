const {server} = require('./server');

const d = new Date;
const localTime = d.toLocaleString();

server(localTime);