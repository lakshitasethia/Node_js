// const generateRandom = require('./utils');

// console.log(generateRandom());

const { add, diff, mul, div, calci } = require('./calci');

calci(() => {
    console.log(add(5, 6));
})