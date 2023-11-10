'use strict';
const dogs = [];
const el = document.getElementById('ul');

for (let i = 0; i <= 6; i++) {
    const name = prompt('Give name of one dog.');
    dogs.push(name);
}

dogs.reverse();
for (let dog in dogs) {
    el.innerHTML += `<li>${dogs[dog]}</li>`;
}