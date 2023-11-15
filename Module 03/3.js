'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let name in names) {
    const ul = document.querySelector('#target');
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = names[name];
}
