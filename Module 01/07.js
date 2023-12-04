'use strict';

let sum = 0;

const rolls = parseInt(prompt('How many times you want to roll dice: '));

for (let i = 1; i <= rolls; i++) {
    const num = diceRoll();
    sum += num
}

console.log(sum)


function diceRoll() {
    return Math.floor(Math.random()*6)+1;
}