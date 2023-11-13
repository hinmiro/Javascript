'use strict';

const numbers = [];
let number = 0
do {
    number = parseInt(prompt('Type number, typing 0 ends program.'));
    numbers.push(number);
} while (number !== 0)

numbers.sort(function (a, b) {return b - a});

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}