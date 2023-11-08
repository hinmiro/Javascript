'use strict';
let nums = [];
let sum = 0;
let product = 1;
let average = 0;

for (let i = 1; i < 4; i++) {
    let num = prompt("Give number.");
    const num_ = parseInt(num);
    nums.push(num_);
}
nums.forEach(x => {
    sum += x;
    product *= x;
    average += x;
});


document.querySelector('body').innerHTML = `Sum is ${sum}\nProduct is ${product}\nAverage is ${average/3}`;