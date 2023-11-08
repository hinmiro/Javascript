'use strict';

const student = prompt("Give me your name and il sort you in one of the great houses.")

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


switch (getRandomInt(1, 4)) {
    case 1:
        document.querySelector('body').innerHTML = `${student}, you are Ravenclaw.`;
        break;
    case 2:
        document.querySelector('body').innerHTML = `${student}, you are Gryffindor.`;
        break;
    case 3:
        document.querySelector('body').innerHTML = `${student}, you are Hufflepuff.`;
        break;
    case 4:
        document.querySelector('body').innerHTML = `${student}, you are Slytherin.`;
        break;
}