const fs = require('fs');

const searchTerm = 'Susan';

const readList = (searchTerm) => {
    fs.readFile('comparison.txt', 'utf8', (err, data)=>{
        if(err){
            console.log(err);
        }
        let database = [];
        let matchCounter = 0;
        database = data.split('\r\n');
        // console.log(database);
        database.forEach(term => {
            if(term === searchTerm) {
                matchCounter++;
            }
        })
        console.log(`we found ${matchCounter} matches to your search term in our database`);
    })
}

readList(searchTerm);