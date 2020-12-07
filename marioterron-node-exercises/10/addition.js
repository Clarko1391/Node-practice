const addition = (array) => {
    let totalValue = 0;
    array.forEach(value => {
        totalValue = totalValue + value;
    });
    console.log(`the total value of all the numbers in the file you provided is: ${totalValue}`);
}

module.exports = {addition};