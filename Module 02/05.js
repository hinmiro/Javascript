'use strict';

const numbers = [];

for (let i = 0; i <= 1;) {
    const number = parseInt(prompt("Type number, typing same number twice ends program."));
    if (numbers.includes(number)) {
        numbers.sort(function (a,b){return a - b});
        for (let j = 0; j < numbers.length; j++) {
            console.log(numbers[j]);
        }
        break;
    } else {
        numbers.push(number);
    }
}