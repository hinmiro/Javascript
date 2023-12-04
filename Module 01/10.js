'use strict';

let sum = 0;
const dices = parseInt(prompt('Type how many times to roll:'));
const sumRolls = parseInt(prompt('Type your sum of rolls: '));

for (let i = 1; i <= 6**dices; i++) {
    const randomNum = Math.floor(Math.random()*6)+1;
    sum += randomNum;
}
console.log(sum)
document.querySelector('body').innerHTML = `Your want sum of ${sumRolls} in ${dices} dices.`
document.querySelector('body').innerHTML = `We got ${} probability.`
