'use strict';
const dogs = [];

for (let i = 1; i <= 6; i++) {
    const name = prompt('Name one of the dogs.');
    dogs.push(name);
}

dogs.sort().reverse();
let myStr = '';
for (let i = 0; i < dogs.length; i++) {
    myStr += `<li>${dogs[i]}</li>`
}
document.querySelector('#ul').innerHTML = myStr;