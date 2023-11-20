'use strict';
const a = document.querySelector('#num1');
const b = document.querySelector('#num2');
const selection = document.querySelector('#operation');
const result = document.querySelector('#result');
const button = document.querySelector('#start');

function calculate() {
    const num1 = parseFloat(a.value);
    const num2 = parseFloat(b.value);
    switch (selection.value) {
        case 'add':
            result.innerHTML = `${num1 + num2}`;
            break;
        case 'sub':
            result.innerHTML = `${num1 - num2}`;
            break;
        case 'multi':
            result.innerHTML = `${num1 * num2}`;
            break;
        case 'div':
            result.innerHTML = `${num1 / num2}`;
            break;
    }
}

button.addEventListener('click', calculate);
