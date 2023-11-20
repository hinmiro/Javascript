'use strict';



const button = document.getElementById('start');
const result = document.getElementById('result');

function calculate() {
    const calculation = document.querySelector('#calculation').value
    let items = calculation.split(/([+\-*/])/);
    console.log(items);
    let operator = items[1];
    let num1 = parseInt(items[0]);
    let num2 = parseInt(items[2]);

    switch (operator) {
        case '+':
            result.innerHTML = `${num1 + num2}`;
            break;
        case '-':
            result.innerHTML = `${num1 - num2}`;
            break;
        case '*':
            result.innerHTML = `${num1 * num2}`;
            break;
        case '/':
            result.innerHTML = `${num1 / num2}`;
            break;
    }
}

button.addEventListener('click', calculate);
