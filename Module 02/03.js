'use strict';
const dogs = [];

for (let i = 0; i <= 6; i++) {
    const name = prompt('Give name of one dog.');
    dogs.push(name);
}

dogs.reverse();
let myStr = '';
for (let i = 0; i < dogs.length; i++) {
    myStr += `<li>${dogs[i]}</li>`
}
document.querySelector('#ul').innerHTML = myStr;