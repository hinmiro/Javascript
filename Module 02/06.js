'use strict';

function diceRoll() {
    return Math.floor(Math.random()*(6-1)+1);
}

let number = 0;
const numbers = [];

do {
    number = diceRoll();
    numbers.push(number);
} while (number !== 6)

let ulStr = '';
for (let i = 0; i < numbers.length; i++) {
    ulStr += `<li>${numbers[i]}</li>`;
}
document.querySelector('#ul').innerHTML = ulStr;